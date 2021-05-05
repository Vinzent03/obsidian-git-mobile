# Obsidian Git Mobile

This is the mobile version of the [obsidian-git](https://github.com/denolehov/obsidian-git) plugin. It is the same plugin except of some tweaks to fix the import of node APIs.

Please file bugs or feature requests on the [origin repo](https://github.com/denolehov/obsidian-git/issues). 

## Consequences of the mobile version

I am using [isomorphic-git](https://isomorphic-git.org/), which is a re-implementation of git in JavaScript, because you cannot use native git on Android or iOS. This brings some problems with it though.
- Merging with conflicts is not supported ([isomorphic-git issue](https://github.com/isomorphic-git/isomorphic-git/issues/325))
- SSH authentication is not supported ([isomorphic-git issue](https://github.com/isomorphic-git/isomorphic-git/issues/231)
- Instead of using native modules, it uses web APIs, why it's affected by [CORS](https://developer.mozilla.org/de/docs/Web/HTTP/CORS) ([isomorphic-git explanation](https://github.com/isomorphic-git/isomorphic-git#cors-support))

The Obsidian devs implemented a workaround for themselves, but didn't expose it to the API so far. Until they improve and expose it, a CORS [proxy server](https://en.wikipedia.org/wiki/Proxy_server) is needed. 

A proxy provided by [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git#cors-support) itself is https://cors.isomorphic-git.org, but please follow their [Terms of Use](https://cors.isomorphic-git.org)


> If you want to support me you can consider [buying me a coffee](https://www.buymeacoffee.com/Vinzent03).

<br>

<a href="https://www.buymeacoffee.com/Vinzent03"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Vinzent03&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>