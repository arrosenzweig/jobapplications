#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Stamp a build id into index.html and version.json.

Run this before every commit that changes index.html or data.js:

    python release.py

GitHub Pages serves index.html with Cache-Control: max-age=600, so a browser can
keep showing a stale copy after a deploy. The page fetches version.json with a
cache-busting query; if its build id differs from the one compiled into the page,
the dashboard offers a reload. This script keeps the two in sync, and points the
data.js query string at the same id so a data refresh is never masked either.
"""
import io, json, re, subprocess, sys, datetime

ROOT = __file__.rsplit('release.py', 1)[0] or '.'


def build_id():
    stamp = datetime.datetime.now().strftime('%Y%m%d-%H%M%S')
    try:
        sha = subprocess.check_output(
            ['git', 'rev-parse', '--short', 'HEAD'],
            cwd=ROOT, stderr=subprocess.DEVNULL).decode().strip()
        return '%s-%s' % (stamp, sha)
    except Exception:
        return stamp


def main():
    bid = build_id()
    path = ROOT + 'index.html'
    html = io.open(path, encoding='utf-8').read()

    new, n1 = re.subn(r"const BUILD_ID = '[^']*';",
                      "const BUILD_ID = '%s';" % bid, html)
    if n1 != 1:
        sys.exit('could not find the BUILD_ID line in index.html')

    new, n2 = re.subn(r'data\.js\?v=[^"]*"', 'data.js?v=%s"' % bid, new)
    if n2 != 1:
        sys.exit('could not find the data.js script tag in index.html')

    io.open(path, 'w', encoding='utf-8').write(new)
    io.open(ROOT + 'version.json', 'w', encoding='utf-8').write(
        json.dumps({'build': bid,
                    'stamped': datetime.datetime.now().isoformat(timespec='seconds')},
                   indent=2) + '\n')
    print('stamped build %s' % bid)


if __name__ == '__main__':
    main()
