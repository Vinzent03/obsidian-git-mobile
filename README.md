# Obsidian Git Mobile

This is the mobile version of the [obsidian-git](https://github.com/denolehov/obsidian-git) plugin. It is the same plugin except of some tweaks to fix the import of node APIs.

Please file bugs or feature requests on the [origin repo](https://github.com/denolehov/obsidian-git/issues). 

## Caution
This plugin is currently in beta.

## Restrictions of the mobile version

I am using [isomorphic-git](https://isomorphic-git.org/), which is a re-implementation of git in JavaScript, because you cannot use native git on Android or iOS.

- SSH authentication is not supported ([isomorphic-git issue](https://github.com/isomorphic-git/isomorphic-git/issues/231))
- Repo size is limited, because of memory restrictions
- Rebase merge strategy is not supported
- Submoduels are not supported

## Installation and clone a repo

1. Create new vault
2. Change config directory in Settings -> About
3. Install Community Plugin BRAT
4. Install `Vinzent03/obsidian-git-isomorphic` from BRAT
5. If cloning private repo, set password/personal access token and username in Settings -> Obsidian Git Mobile
6. Execute clone repo command
7. Reload plugin

## Performance
**Setup:** iPad Pro M1 with a [repo](https://github.com/Vinzent03/obsidian-git-stress-test) of 3000 files reduced from [10000 markdown files](https://github.com/Zettelkasten-Method/10000-markdown-files)

The only really time consuming part is to check the whole working directory for file changes. So checking all files for changes to stage takes 03:40 min. Other commands like pull, push and commit are very fast (1-5 seconds). So the best way is to stage individual directories in which you have worked and commit only staged files after it.
The initial clone took 00:25 min.

If you find this plugin useful and would like to support its development, you can support me on [Ko-fi](https://Ko-fi.com/Vinzent).

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F195IQ5)
