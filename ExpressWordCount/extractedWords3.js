["Node","Development","Environment","Course","Handout","TRAINING","MATERIALS","","-","COURSE","HANDOUT","Contacts","Elliot.Womack%40qa.com","team.qac.all.trainers%40qa.com","www.consulting.qa.com","Node","Development","Environment","Description","This","document","will","be","detailing","what","a","Node","Development","Environment","contains ","","recommending","particular","tools ","and","what","each","part","of","the","environment","is","for.","Tools","A","Node","development","Environment","is","comprised","of","multiple","different","technologies","","that","are","linked","together","to","promote","a","simple","workflow ","saving","time","and","creating","a","","safer","development","environment","for","the","team.","A","typical","environment","will","be","comprised","of","the","following.","1.","Build","Tool","2.","Transpiler","3.","Linter","4.","Testing","%E2%80%BA","Mocking","%E2%80%BA","Helper","Libraries","5.","Automation","Toolkit","The","environment","creates","its","own","pseudo-pipeline","that","would","look","like","this.","","QA","Consulting","","-","Course","Handout","2","Node","Development","Environment","BUILD","TOOL","Also","known","as","bundlers ","build","tools","will","generally","move%2Fcompile%2Fcreate","files","com","-","prised","of","the","files","you","have","created.","For","example ","in","your","project","you","might","create","20","separate","javascript","files ","utilising","","other","libraries","within","those","files ","you","won't","want","your","users","to","have","to","download","","all","20 ","so","you","could","use","a","build","tool%2Fbundler","to","package","these","all","together","into","one","","file ","but","then","it","will","change","your","html","references","to","those","script","files","it","created ","not","","altering","how","your","project","works.","Build","tools","can","do","a","lot","more","than","this","though.","","Through","the","use","of","plugins","you","can","enable","other","features","that","it","can","do","to","your","","project ","creating","a","pseudo-pipeline","that","your","code","will","go","through","until","it","hits","a","","stage","you","can","view","it","or","deploy","it","for","production.","Some","example","features","that","you'll","be","exposed","to","are%3B","%E2%80%A2","Minifying","","%E2%80%BA","The","process","of","reducing","the","filesize","of","your","code","%E2%80%A2","Uglifying","(Obfuscating)","%E2%80%BA","Making","your","code","unreadable ","as","to","protect","your","originality","and","improve","","security","%E2%80%A2","Hot","Reloading","%E2%80%BA","Reloading","the","page","every","save ","speeding","up","development","%E2%80%A2","Tree","shaking","%E2%80%BA","Finding","common","libraries","across","packages","and","deleting","duplicates","Example","Build","Tools","%E2%80%A2","Browserify","%E2%80%A2","Webpack","%E2%80%A2","Rollup","%E2%80%A2","JSPM","Webpack","has","been","the","most","popular","one","for","a","few","years","now ","and","is","constantly","","being","updated.","webpack","","-","","https:%2F%2Fwebpack.js.org%2F","QA","Consulting","","-","Course","Handout","3","Node","Development","Environment","TRANSPILER","A","transpiler","is","a","tool","that","converts","one","set","of","code","into","another","set","of","code ","gener","-","ally","this","is","from","one","language","to","another.","For","example","there's","a","JavaScript","superset","","called","Elm","which","is","a","functional","version","of","javascript ","however","the","syntax","is","vastly","","different","so","it","would","not","run","on","a","browser ","so","once","you've","finished","developing","you","","would","transpile","this","Elm","code","into","normal","JavaScript","code","so","it","would","run.","Numerous","other","languages","like","to","transpile","to","JavaScript ","since","they","like","the","ability","","of","deploying","where","javascript","can","deploy","(Anywhere!)","But","prefer","coding","in","another","","language","(Such","as","GoLang)","The","transpilers","that","we","are","interested","are","a","lot","simpler","than","this ","there","is","a","tran","-","spiler","called","","babel","","that","lets","us","code","to","the","latest","version","of","JavaScript","that","is","in","","draft ","aka","all","the","latest","features","of","the","language ","however","they're","not","all","available","","on","every","environment ","so","babel","will","transpile","it","to","a","version","that","is","available","to","run.","","This","lets","us","use","all","the","features","of","the","latest","version","with","none","of","the","downsides","of","","incompatibility!","babel","","-","","https:%2F%2Fbabeljs.io%2F","LINTER","Linting","simply","put","is","code","analysis","that","will","tell","you","problems","will","your","code ","","whether","that","be","invalid","syntax","or","formatting","errors%2Fpreferences","that","your","team","has","","imposed","upon","you.","Linters","generally","come","with","a","default","set","of","rules","to","follow","but","your","team","will","cre","-","ate","a","custom","set","that","they","want","to","adhere","too.","ESLint","","is","the","most","popular","linter","currently","and","offers","a","broad","range","of","customiza","-","bility","and","configurability.","Linters","are","also","part","of","the","CI","Pipeline ","where","if","a","linter","detects","an","%E2%80%9Cerror%E2%80%9D","or","a","cer","-","tain","number","of","warnings ","it","will","break","the","build.","eslint","","-","","https:%2F%2Feslint.org%2F","QA","Consulting","","-","Course","Handout","4","Node","Development","Environment","TESTING","Setting","up","the","unit","tests","in","your","environment","is","as","important","as","every","other","part","of","","the","process ","getting","confirmation","every","time","you","save","if","all","your","tests","are","passing ","","and","if","they","are","not","then","you","know","exactly","what","you","need","to","go","and","do.","Testing","is","also","a","part","of","the","CI","Pipeline ","if","any","tests","fail","then","the","build","will","fail.","Setting","up","a","test","environment","requires","multiple","tools.","1.","Testing","Framework","2.","Assertion","Library","3.","Helper","Libraries","%E2%80%BA","Mocking","Tools","Mocha","","and","","Jasmine","","are","the","popular","unit","testing","frameworks ","Jasmine","comes","with","","an","assertion","library","built","in ","a","popular","assertion","library","alongside","Mocha","is","","Chai",".","In","the","end","most","frameworks%2Fassertion","libraries","accomplish","the","same","thing ","so","it's","","not","that","important","what","you","choose.","mocha","","-","","https:%2F%2Fmochajs.org%2F","chai","","-","","https:%2F%2Fchaijs.com%2F","Helper","Libraries","","are","important","as","they","determine","how","effective","your","tests","are ","they","","help","you","create","simpler%2Fquicker","tests","that","may","enable","you","to","test","things","you","other","-","wise","could","not.","An","example","helper","library","is","","JSDom"," ","you","will","be","running","your","tests","in","","node","","so","","there","isn't","inherently","a","document","to","open","and","check","elements","on","the","page","through","","the","","document","","object.","JSDom","re-creates","this","","virtual","dom","","and","then","you","can","interact","","with","the","page","like","you","would","normally.","Another","example","library","is","","Cheerio"," ","which","is","effectively","","jquery","","for","node ","great","if","","you're","familiar","with","jquery","and","want","it","to","create","tests.","JSDom","","-","","https:%2F%2Fwww.npmjs.com%2Fpackage%2Fnode-jsdom","QA","Consulting","","-","Course","Handout","5","Node","Development","Environment","Mocking","Tools","","are","libraries","that","will","generate","fake","data","or","let","you","hot-swap","envi","-","ronments.","For","example ","if","you","have","an","online","database","you","generally","fetch","data","from","and","","then","work","with ","if","you","wanted","to","work","offline","you","wouldn't","be","able","to","test","your","","code ","so","you","could","","mock","","a","database","with","some","raw%2Ffake","data","and","then","your","code","","should","then","work","with","that","data.","An","example","mocking","setup","would","be","to","use","","JSON","Schema","Faker","","to","generate","the","","fake","data","and","","JSON","Server","","to","provide","that","data.","JSON","Schema","Faker","","-","","https:%2F%2Fgithub.com%2Fjson-schema-faker%2Fjson-schema-faker","JSON","Server","","-","","https:%2F%2Fwww.npmjs.com%2Fpackage%2Fjson-server","AUTOMATION","TOOLKIT","All","of","the","things","listed","are","the","","bare","minimum","","and","it's","already","a","lot","of","tools ","every","","time","we","save","our","code","we","don't","want","to","have","to","run","5%2B","commands","to","run","all","our","","tests ","our","linting ","reloading","the","server","we're","working","on","to","see","visual","feedback","","and","so","forth ","so","we","need","","another","","tool","to","bring","all","these","together","to","do","it","for","us ","so","","every","time","we","save","this","will","all","happen.","Popular","automation","toolkits","are%3B","","%E2%80%A2","Grunt","(Old)","%E2%80%A2","Gulp","(Replaced","Grunt)","%E2%80%A2","NPM","Scripts","(Replaced","Gulp)","Whilst","Gulp","has","a","lot","of","plugins","that","might","make","you","want","to","choose","it ","choosing","","another","tool","instead","of","using","a","tool","we're","already","using","(npm)","is","an","unnecessary","","abstraction","and","makes","debugging","a","pain ","also","if","gulp","doesn't","support","a","tool","","you","","want","to","use ","you","either","need","to","create","a","plugin","yourself","or","wait","for","one","to","be","made.","","Whilst","npm","talks","to","the","tools","directly ","not","requiring","extra","downloads","to","set","up","to","","interlink","these","tools.","NPM","Scripts","Resource","","-","","https:%2F%2Fcss-tricks.com%2Fwhy-npm-scripts%2F","QA","Consulting","","-","Course","Handout","6"]