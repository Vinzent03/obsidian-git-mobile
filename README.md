# Obsidian Git Isomorphic

This is the mobile version of the [obsidian-git](https://github.com/denolehov/obsidian-git) plugin. It is the same plugin except of some tweaks to fix the import of node APIs.

Please file bugs or feature requests on the [origin repo](https://github.com/denolehov/obsidian-git/issues). 

## Consequences of the mobile version

I am using [isomorphic-git](https://isomorphic-git.org/), which is a re-implementation of git in JavaScript, because you cannot use native git on Android or iOS. This brings some problems with it though.
- Merging with conflicts is currently not supported ([isomorphic-git issue](https://github.com/isomorphic-git/isomorphic-git/issues/325))
- SSH authentication is not supported ([isomorphic-git issue](https://github.com/isomorphic-git/isomorphic-git/issues/231)
- Repo size is limited, because of memory issues. I suggest < 20 MB

If you find this plugin useful and would like to support its development, you can support me on [Ko-fi](https://Ko-fi.com/Vinzent).

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F195IQ5)
