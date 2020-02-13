# Unit Test Bug

I want to be able to run unit tests in Docker using Chromium.

It has worked previously, so the issue may relate to using `@edge` versions in Dockerfile.dev.

Any help appreciated!

## Reproducing Bug

*From inside the repo...*

```shell
# 1) Pull submodules (run once)
git submodule update --init --recursive

# 2) Run command to reproduce bug (re-run indefinitely). Takes a few minutes the first time.
./reproduce-bug.sh
```

## Expected Outcome

```shell
[list of passed tests]
...
Finished in 0.026 secs / 0.031 secs @ 19:53:44 GMT+1100 (AEDT)
SUMMARY:
✔ 46 tests completed
```

This can be seen when running `npm install && npm test` in the repo (using Node 8).

## Actual Outcome

```shell
13 02 2020 09:10:45.314:ERROR [launcher]: Cannot start ChromeHeadless

13 02 2020 09:10:45.316:ERROR [launcher]: ChromeHeadless stdout:
13 02 2020 09:10:45.317:ERROR [launcher]: ChromeHeadless stderr:
13 02 2020 09:10:45.772:ERROR [launcher]: Cannot start ChromeHeadless

13 02 2020 09:10:45.772:ERROR [launcher]: ChromeHeadless stdout:
13 02 2020 09:10:45.773:ERROR [launcher]: ChromeHeadless stderr:
13 02 2020 09:10:45.939:ERROR [launcher]: Cannot start ChromeHeadless

13 02 2020 09:10:45.939:ERROR [launcher]: ChromeHeadless stdout:
13 02 2020 09:10:45.939:ERROR [launcher]: ChromeHeadless stderr:
13 02 2020 09:10:46.424:ERROR [launcher]: ChromeHeadless failed 2 times (cannot start). Giving up.

Finished in 0 secs / 0 secs @ 09:10:46 GMT+0000 (UTC)

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! react-redux-starter-kit@3.0.1 test: `cross-env NODE_ENV=test karma start build/karma.config`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the react-redux-starter-kit@3.0.1 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-02-13T09_10_46_935Z-debug.log
```
