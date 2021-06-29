var tipuesearch = {"pages": [{'title': 'About', 'text': "學計算計程式做什麼? \n 計算機程式可以解決 ____\xa0 問題? \n Don't confuse essense with tools. \n \n ( source ) \n 這裡是國立虎尾科技大學-機械設計工程系-計算機程式課程網站. \n Repository:  https://github.com/mdecourse/cp2021 \n Github Pages:  https://mde.tw/cp2021 \n Github 簡介:  https://docs.microsoft.com/zh-tw/learn/modules/introduction-to-github/ \n Github Actions:  https://docs.microsoft.com/zh-tw/learn/modules/github-actions-automate-tasks/ \n LaTeX 教學:  https://wdv4758h.github.io/notes/documentation/latex.html \n https://github.com/marketplace/actions/latex-action \n Zulipchat:  https://kmolab.zulipchat.com \n RoboDK:  https://robodk.com \n RoboDK API:  https://robodk.com/doc/en/PythonAPI/  ( RoboDK-API on Github ) \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n \n", 'tags': '', 'url': 'About.html'}, {'title': 'Python', 'text': '學習計算機程式語言的態度建議:  https://learnpythonthehardway.org/book/intro.html \n \n 必得 花工夫 才學得來 (The hard way is easier) \n 自己 讀資料 自己 刻每一行程式碼  (Reading and Writing (Typing)) \n 要 注重 每一個 細節  (Attention to Detail) \n 要能 發現差異  (Spotting Differences) \n 千萬 不要複製貼上  (Do not Copy-Paste) \n 多 觀看 相關 操作示範 影片 (Using the Included Videos) \n 多 練習 而且要 堅持學習  (Practice and Persistence) \n \n 計算機程式學習 Python 目標: 編寫可以用於 機電資自動化整合系統設計與模擬 用的 網際程式 . \n Web Browser <-> Client\xa0 <-> Brython <-> Flask <->  Server <-> RoboDK, CoppeliaSim and Webots \n Examples: \n https://medium.com/@patrickbfuller/a-simple-flask-app-edeed75dbee2 \n https://github.com/Patrickbfuller/simple_flask \n https://github.com/mileserickson/flask-brython-example \n https://pypi.org/project/brython-server/ \n https://github.com/andy31lewis/brySVG \n https://github.com/dunossauro/todo_list_flask_brython \n https://github.com/DarthBayo/Encrypt \n https://github.com/chfw/brython-pack \n https://github.com/rayluo/brip \n https://github.com/rayluo/brython-project-template \n https://github.com/rayluo/draggable-svg \n https://github.com/Shohrab-Hossain/Tic-Tac-Toe-web \n https://github.com/denisecase/chapstack \n https://gitlab.com/sammdu/bot-tac-toe/ \n https://github.com/mdecourse/lookupdict \n https://github.com/mdecourse/scissor-rock-paper2 \n https://github.com/mdecourse/wcms-scrum1 \n Python 語法 \n 由於 Github Pages 不允許伺服 __init__.py 檔案, 因此必須將  ggame  採用  https://brython.info/static_doc/en/import.html  中 Optimization 的方式轉為 brython_modules.js 後直接以 script 標註導入頁面. \n 將 ggame 中的 Brython 程式碼轉為 brython_modules.js 的方法: \n 在可攜系統中的 Python 安裝 brython 模組: pip install brython \n 將所安裝 brython 模組中的 brython_stdlib.js 複製一份到 ggame 倉儲中, 確定目前 ggame 目錄架構為: \n brython_stdlib.js \n ggame \n 意即 ggame 目錄中有 brython_stdlib.js 與 ggame brython 模組原始碼. \n 接下來執行 y:\\tmp\\github\\ggame>python -m brython --modules \n 完成後, 就可以在 y:\\tmp\\github\\ggame> 目錄中建立 brython_modules.js \n 以本頁面的作法是將 ggame 所需的 graphics 檔案放至 images 目錄中, 而 brython_modules.js 則放至 downloads 目錄後, 以 /downloads/brython_modules.js 放入 script 標註中引用. \n Python 3 官方教材:  https://docs.python.org/3/index.html \n Python tutorial:  https://docs.python.org/3/tutorial/index.html  (英文) \n Python tutorial:  https://docs.python.org/zh-tw/3/tutorial/  (中文) \n 網頁上的 Python - Brython:  https://www.brython.info/static_doc/en/intro.html  (解譯式) \n 網頁上的 Python GUI- Flexx:  https://flexx.readthedocs.io/en/stable/  (轉譯式) \n \n \n \n  for ggame  \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n  for Konva 程式庫  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n 開始練習 print() 用法, 並著手建立函式 \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \n  ****************************** keyword start  \n \n \n  ****************************** keyword end  \n  ***************************** slide ex1 start  \n \n \n \n  ***************************** slide ex1 end  \n  ***************************** slide ex2 start  \n \n \n \n  ***************************** slide ex2 end  \n  ***************************** slide ex3 start  \n \n \n \n  ***************************** slide ex3 end  \n  ***************************** slide ex4 start  \n \n \n \n  ***************************** slide ex4 end  \n  line drawing start  \n \n \n \n  line drawing ends  \n \n  flag ex start  \n \n \n \n  flag ex ends  \n \n  bunny start  \n \n \n \n  bunny ends  \n \n  clear canvas start  \n \n \n \n  clear canvas ends  \n \n  cango spur gears start  \n \n \n \n  cango spur gears ends  \n \n  temp convert start  \n \n \n \n  temp convert ends  \n \n  forloop start  \n \n \n \n  forloop ends  \n \n  guess start  \n \n \n \n  guess ends  \n \n  autoguess start  \n \n \n \n  autoguess ends  \n \n  lottery start  \n \n \n \n  lottery ends  \n \n  台灣威力彩 start  \n \n \n \n  台灣威力彩 ends  \n \n  bezier starts  \n \n \n \n  bezier ends  \n \n  turtle1 starts  \n \n \n \n  turtle1 ends  \n \n  turtle2 starts  \n \n \n \n  turtle2 ends  \n \n  turtle3 starts  \n \n \n \n  turtle3 ends  \n \n  turtle4 starts  \n \n \n \n  turtle4 ends  \n \n  turtle5 starts  \n \n \n \n  turtle5 ends  \n \n  turtle6 starts  \n \n \n \n  turtle6 ends  \n \n  turtle7 starts  \n \n \n \n  turtle7 ends  \n \n  turtle8 starts  \n \n \n \n  turtle8 ends  \n \n  konva1 starts  \n \n \n \n  konva1 ends  \n \n  ycqsort starts  \n \n \n \n  ycqsort ends  \n \n  ball starts  \n \n \n \n  ball ends  \n \n  nfulist starts  \n \n \n \n  nfulist ends  \n \n  clock1 starts  \n \n \n \n  clock1 ends  \n Keyword Ex1 Ex2 Ex3 Ex4 Ex5 Guess Autoguess 大樂透 威力彩 Temp Draw Flag Bezier clock1 Turtle1 Turtle2 Turtle3 Turtle4 Turtle5 Turtle6 Turtle7 Turtle8 Konva1 Bunny Ball Spur Ycqsort nfulist Clear \n 參考資料: \n turtle_intro.pdf \n turtle_intro2.pdf \n 其他擷取程式的方式:  http://mde.tw/2017springvcp/blog/web-based-python.html \n Qt for Python \n https://www.qt.io/qt-for-python \n https://build-system.fman.io/python-qt-tutorial \n https://build-system.fman.io/pyqt-exe-creation/ \n https://github.com/mherrmann/fbs-tutorial \n https://www.ics.com/blog/we-ported-qt-app-c-python-heres-what-happened \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Python.html'}, {'title': 'Brython', 'text': '上一頁的網際 Python 是透過  https://brython.info/  完成, 當使用者在網頁中執行 Python 程式時, 透過 Brython 即時轉為 Javascript 後執行. \n Brython Google Group:  https://groups.google.com/g/brython \n Introduction guide to Brython: \n https://stackabuse.com/an-introductory-guide-to-brython \n https://www.geeksforgeeks.org/introduction-to-brython/ \n https://realpython.com/brython-python-in-browser/ \n Game in Brython: \n https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n Calculator in Brython: \n https://codehs.com/tutorial/zach/Intro_to_Brython_-_Calculator \n calculator.html \n \n calculator.html 原始碼: \n <html>\n    <head>\n        <meta charset="utf-8">\n        <!-- 直接從 cdn 導入 brython 程式庫 -->\n        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.8.8/brython.min.js"></script>\n<!-- 設定適合用於 calculator 的 table td 格式 -->\n<style>\n*{\n    font-family: sans-serif;\n    font-weight: normal;\n    font-size: 1.1em;\n}\ntd{\n    width: 80px;\n    background-color: #ccc;\n    padding: 10px 30px 10px 30px;\n    border-radius: 0.2em;\n    text-align: center;\n    cursor: default;\n}\n#result{\n    border-color: #000;\n    border-width: 1px;\n    border-style: solid;\n    padding: 10px 30px 10px 30px;\n    text-align: right;\n}\n</style>\n    </head>\n\n    <body onload="brython()">\n        <script type="text/python">\n            from browser import document, html\n            # calc 為 html table\n            calc = html.TABLE()\n            calc <= html.TR(html.TH(html.DIV("0", id="result"), colspan=3) +\n                            html.TD("C"))\n            lines = ["789/", "456*", "123-", "0.=+"]\n            \n            calc <= (html.TR(html.TD(x) for x in line) for line in lines)\n            \n            document <= calc\n            \n            result = document["result"] # direct acces to an element by its id\n            \n            def action(event):\n                """Handles the "click" event on a button of the calculator."""\n                # The element the user clicked on is the attribute "target" of the\n                # event object\n                element = event.target\n                # The text printed on the button is the element\'s "text" attribute\n                value = element.text\n                if value not in "=C":\n                    # update the result zone\n                    if result.text in ["0", "error"]:\n                        result.text = value\n                    else:\n                        result.text = result.text + value\n                elif value == "C":\n                    # reset\n                    result.text = "0"\n                elif value == "=":\n                    # execute the formula in result zone\n                    try:\n                        result.text = eval(result.text)\n                    except:\n                        result.text = "error"\n            \n            # Associate function action() to the event "click" on all buttons\n            for button in document.select("td"):\n                button.bind("click", action)\n        </script>\n    </body>\n</html> \n 延伸練習: \n 請將上述網際加減乘除計算機, 以 Brython(Browser Python) 改為 網際工程用計算機 . \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Spacewar', 'text': '2018 網際模擬程式 \n ggame documentation.pdf \n another game engine in brython:  https://github.com/mdecourse/brython-game-engine-demo \n \n  check if we need brython_stdlib.js or not  \n \n  <script src="./../cmsimde/static/brython_stdlib.js"></script>  \n \n  for ggame  \n \n \n \n \n \n  brython_modules.js is ggame brython library converted into javascript  \n \n  start brython  \n \n  ggame will show on graphics-column markup  \n \n \n', 'tags': '', 'url': 'Spacewar.html'}, {'title': 'Flask', 'text': 'Server 端 (Flask): \n from flask import Flask, render_template, request, jsonify\n \n# Initialize the Flask application\napp = Flask(__name__)\n \n@app.route(\'/\')\ndef index():\n    return render_template(\'index.html\')\n \n@app.route(\'/add_numbers\', methods=[\'POST\'])\ndef add_numbers():\n    a = request.form.get(\'a\', 0, type=int)\n    b = request.form.get(\'b\', 0, type=int)\n    #return jsonify(result = a+b)\n    # 必須傳回字串?\n    return str(a+b)\n \nif __name__ == \'__main__\':\n    app.run(debug=True) \n Client 端 (Brython): \n <!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>\n    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">\n    <script src="http://brython.info/src/brython_dist.js"></script>\n  </head>\n  <body onload="brython()">\n  <script type="text/python">\n    from browser import document\n    from browser import ajax\n    # https://www.brython.info/static_doc/en/ajax.html\n     \n    def on_complete(req):\n        document["txt_area"] .clear()\n        if req.status==200 or req.status==0:\n            document["txt_area"] <= req.text\n        else:\n            document["txt_area"] <= "error "+req.text\n             \n    def get(url):  \n        # req 從 ajax 模組中的 ajax 類別建立案例, 為一個 ajax 物件        \n        req = ajax.ajax()\n        # a 為 id="A" 輸入欄位中所輸入的值\n        a = document[\'A\'].value\n        # b 為 id="B" 輸入欄位中所輸入的值        \n        b = document[\'B\'].value\n        # ajax 物件中的 bind 方法, 第一個輸入變數為 evt, \'complete\' 表示 ajax 從伺服器取值完成後, 執行 on_complete 函式\n        req.bind(\'complete\', on_complete)\n        req.open(\'POST\', url, True)\n        req.set_header(\'content-type\',\'application/x-www-form-urlencoded\')\n        req.send({"a": a, "b":b}) \n     \n    # 使用者按下 id="calculate" 按鈕, 將會執行上述 get("/add_numbers") 函式\n    document[\'calculate\'].bind(\'click\',lambda ev:get(\'/add_numbers\'))\n \n</script>\n   \n    <div class="container">\n      <div class="header">\n        <h3 class="text-muted">Brython ajax example</h3>\n      </div>\n      <div>\n    <input type="text" id="A" size="5" name="a"> +\n    <input type="text" id ="B" size="5" name="b"> =\n    <div id="txt_area"></div>\n    <p><button id="calculate">calculate server side</button>\n      </form>\n      </div>\n    </div>\n  </body>\n</html> \n', 'tags': '', 'url': 'Flask.html'}, {'title': 'Rust', 'text': '在 Windows 操作系統中學習 Rust, 首先需要一個能夠編譯 Rust 程式的 可攜系統 . \n 有了可攜系統之後再逐步從  http://stevedonovan.github.io/rust-gentle-intro/  了解 Rust 並非簡單易學, 而是當機械設計工程師在熟悉利用 Python 建立網際服務與最佳化設計運算後, 必須利用數值分析方法提升運算效益時, Rust 會是不錯的選擇之一. 具備學習動機之後, 就可以導入諸如  https://github.com/KmolYuan/metaheuristics-nature-rs  的程式庫, 配合伺服器中的網際 Python 程式進行設計運算. \n User Forum:  https://users.rust-lang.org/ \n Reddit:  https://www.reddit.com/r/rust/ \n Why Python users may need Rust: \n Speed up your python using Rust \n https://github.com/rust-lang/book \n http://stevedonovan.github.io/rust-gentle-intro/ \n The Rust Programming Language: \n https://doc.rust-lang.org/stable/book/ \n https://lise-henry.github.io/books/trpl2.pdf \n https://github.com/PyO3/pyo3  for Rust Version 1.41.1 (2020-02-27) and up. \n \n', 'tags': '', 'url': 'Rust.html'}, {'title': 'RoboDK', 'text': '\n \n \n', 'tags': '', 'url': 'RoboDK.html'}, {'title': '開發範例', 'text': '平面機構分析與合成: \n https://github.com/mdecourse/ps2020 \n \n \n Python GUI with Serial port communication: \n https://github.com/mdecourse/Pyquino \n \n \n', 'tags': '', 'url': '開發範例.html'}, {'title': '網際程式', 'text': "An re-introduction to HTTP cookies: \n https://www.valentinog.com/blog/cookies/ \n 以下程式主要在結合 Flask 與 Fossil SCM 的登入 cookie 設定, 兩台 server 必須屬於同一個 domain name. \n from flask import Flask\nfrom flask import make_response, request, redirect\nimport requests\n# for app.secret_key\nimport os\n\napp = Flask(__name__)\n# 使用 session 必須要設定 secret_key\nsecret_key = os.urandom(24).hex()\napp.secret_key = secret_key\n\n@app.route('/')\ndef hello_world():\n    with requests.Session() as s:\n        url = 'https://fossil.kmol.info/u/yen/login'\n        post_var = {'u': 'username', 'p': 'password'}\n        headers = {'X-Requested-With': 'XMLHttpRequest'}\n        result = s.post(url, data = post_var, headers = headers)\n        cookie = s.cookies.get_dict()\n        key = list(cookie.keys())[0]\n        value = cookie[key]\n        response = make_response(redirect(url))\n        response.set_cookie(key, value)\n        return response\n        \nif __name__ == '__main__':\n    app.run() \n Python and SQLite: \n https://github.com/thombashi/SimpleSQLite \n https://github.com/codewithlennylen/Python-SQLite-Tutorials \n", 'tags': '', 'url': '網際程式.html'}, {'title': 'FossilPy', 'text': 'https://github.com/gumblex/fossilpy \n import sqlite3\ncon = sqlite3.connect(\'kmol.fossil\')\ncur = con.cursor()\n\n# this is the login user through flask Oauth2 login\nusername = "yen"\n\n# check if login name existed\n# pw field is the password\ncur.execute("select pw from user where login=\'" + username + "\';")\npassword = cur.fetchall()\n\nif len(password) == 0:\n    print("account is not created!")\n    # we may need to create account for this login user\nelse:\n    # the fetched data is a list with tuple inside\n    print(password[0][0])\n    # we will need the user account and password to get login cookie\n    # we will use the account/password to login through flask connection\n\ncon.close() \n 當 Flask Oauth2 server 與 Fossil SCM 同在一台主機上共用 domain name 時, 可以利用下列程式, 讓使用者透過 Oauth2 登入 Fossil SCM 倉儲: \n from flask import Flask\nfrom flask import make_response, redirect\n# for creating session\nimport requests\n# for generating random secret_key\nimport os\n\napp = Flask(__name__)\nsecret_key = os.urandom(24).hex()\napp.secret_key = secret_key\n\n@app.route(\'/\')\ndef hello_world():\n    with requests.Session() as s:\n        url = \'https://fossil.kmol.info/u/yen/login\'\n        post_var = {\'u\': \'yen\', \'p\': \'fossil\'}\n        headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n        result = s.post(url, data = post_var, headers = headers)\n        cookie = s.cookies.get_dict()\n        key = list(cookie.keys())[0]\n        value = cookie[key]\n\n        response = make_response(redirect(url))\n        response.set_cookie(key, value)\n        return response\n        \n\nif __name__ == \'__main__\':\n    app.run()\n     \n \n', 'tags': '', 'url': 'FossilPy.html'}, {'title': 'Delta', 'text': "Delta format 的應用說明: \n Suppose we have some text value a, and user has changed it to value b. Using delta function we can get a compressed delta value d that we can store and keep it along with the new text value b. If later user wants to see the previous version of text, we can use deltainv(b, d) to get the previous value a. If we keep all consequtive deltas we can use deltainv multiple times to get any of the earlier text versions. \n 原始的  Fossil SCM Delta  以 C 編寫. \n 以下則以 setuptools 編譯為 Python 動態連結程式庫. \n Python Fossil Delta: \n https://github.com/ggicci/python-fossil-delta \n import fossil_delta\n\ndef main():\n    # 使用者在改版過程將 abcdef 改為 abc\n    # 當下透過 delta algorithm 對兩者取 delta\n    delta = fossil_delta.create_delta(b'abc', b'abcdef')\n    # 之後透過 delta 運算給定 delta 與目前的版本, 可以取得先前的版本內容\n    out = fossil_delta.apply_delta(b'abc', delta)\n    print(out)  # --> abcdef \n 以及用 Rust 改寫. \n Rust Fossil Delta: \n https://crates.io/crates/fossil-delta \n 其中包含  Leo Editor  的應用. \n 將  delta.c  透過 \n setup.py \n from setuptools import setup\n\nsetup(\n    name='python-fossil-delta',\n    version='18.11.27',\n    description='Delta compression algorithm from fossil SCM',\n    long_description=open('README.md', 'rt').read(),\n    url='https://github.com/ggicci/python-fossil-delta',\n    author='Ggicci',\n    author_email='ggicci@163.com',\n    license='MIT',\n    keywords='fossil-delta compression algorithm',\n    setup_requires=['cffi>=1.11.5'],\n    package_dir={'': 'src'},\n    packages=['fossil_delta'],\n    package_data={\n        'fossil_delta': ['*.h', '*.c', 'build/*.py'],\n    },\n    cffi_modules=[\n        'src/fossil_delta/build/fossil_delta_build.py:ffibuilder',\n    ],\n    install_requires=['cffi>=1.11.5'],\n    platforms='any',\n)\n \n 編譯為 dll, 可以為 Python 程式呼叫運用. \n", 'tags': '', 'url': 'Delta.html'}, {'title': 'DSL', 'text': 'Domain Specific Language: \n https://github.com/lark-parser/lark \n http://blog.erezsh.com/how-to-write-a-dsl-in-python-with-lark/ \n \n', 'tags': '', 'url': 'DSL.html'}, {'title': '課程主題', 'text': '建立可攜系統在解決 ____ 問題? \n 建立可攜程式系統: \n 從 可攜系統 中選擇所需組合, 搭建可用於維護個人倉儲與網站內容用之隨身程式系統. \n 維護學習倉儲與網站: \n Portablekmol_base - 每一個 portablekmol 可攜程式系統都必須包括, 其中內含啟動隨身與關閉隨身系統的批次檔案與對應的 home 目錄. \n SciTE  - 程式與文件編輯器, 經過設定, 可用來解譯 Python, Lua 與 ANSI C 程式. \n ShareX  - Windows 電腦畫面取影像或拍攝操作影片用之開放源工具, 應該要設法用  Qt for Python  改寫, 其主要核心程式為開放源的  ffmpeg ,  ShareX  利用 C# 建立其操作流程之 GUI 功能視窗介面. \n Zoomit  - 用於拍攝操作影片縮放畫面螢幕之工具. \n Process Explorer  - 用於 Windows Process 檢視與控管之工具. \n Python  - 用於維護個人靜態網頁與動態網頁之程式解譯系統, 也用於進行 GUI 套件與網際程式開發, 或最佳化及數值分析運算. \n 為了啟動最新版的 CMSiMDE 動態網站, Python 需要安裝 pyopenssl 模組: pip install pyopenssl. \n Portablegit  - Git 分散式版次管理系統工具. \n Putty  - 提供 sftp, ssh 與 key 控管及網路傳檔或遠端登入工具. \n Filezilla  - 提供 GUI 模式之 sftp 網路傳檔工具. \n Xming  - Windows X server. \n Portable OBS  - 可攜網路串流平台, 可與 Youtube 直播結合, 將直播內容存於 Youtube 直播影片系統中. \n RoboDK  - 工業級機械手臂在線與離線模擬與控制系統, 提供 Python API 程式介面, 可讓使用者直觀學習 Python 程式語法, 進而學習如何操控工業級機械手臂執行自動化操作流程. \n CoppeliaSim  - 開放源機電系統模擬與控制整合平台, 提供 Lua 與 Python API 程式控制介面, 可近端或遠端控制模擬中的機電系統. \n Msys2  - 可在 Windows 採用與 Mac 及 Linux 操作系統相同的 C/C++ 程式編譯流程, 主要目的在開發可跨各種操作系統的機械設計相關套件與應用程式. \n TCC  - 可與  SciTE  結合, 用於簡單 ANSI C 程式的類解譯執行. \n Lua  - 主要用於  CoppeliaSim  機電系統與模擬, 也可用於 網際程式開發 . \n Range3  - 小型開放源有限元素分析套件. \n Webots  - 開放源機電系統模擬與控制平台, 其特色是採用 VRML 2.0 延伸格式建立零組件模型, 除具備網際介面外, 也可讓使用者透過程式方法與各種參數式電腦輔助設計系統結合, 直接進行機電系統的零組件轉檔, 無需中間經由人工再次進行機電模擬系統組立. \n MikTeX  -  LaTeX  文件編譯套件, 可與  Github Actions  結合在近端或雲端編譯使用者所建立的協同 LaTeX 文件. \n Rust  - 二十一世紀工程師的 C++ 程式語言. \n 建立倉儲與網站, 在解決 ____ 問題? \n 建立課程學習倉儲與網頁: \n 本課程所有學員都必須建立  github  (若  gitlab  已開放一般用戶使用  gitlab pages , 則需同時建立  gitlab  帳號) 與  Heroku  帳號, 目的在將課程學習歷程, 記錄在分散式版次管理系統中. \n 除了雲端主機外, 各學員必須學會如何利用  Virtualbox  上的  Ubuntu  虛擬主機, 將雲端分散式版次管理系統上的內容, 同步至自行架設的  GOGS  (或  Gitea ) 與  Fossil SCM  分散式版次管理系統. \n Fossil SCM 的出現, 在解決 ____ 問題? \n Fossil SCM 手冊巡禮: \n https://www.fossil-scm.org/home/doc/trunk/www/index.wiki \n Git 與 Fossil SCM 倉儲之間的內容同步, Fossil SCM 系統應用. \n 在網際介面學習簡單的 Python 語法, 在解決 ____ 問題? \n 利用網際介面與可攜系統學習 Python 程式語法: \n \n 了解如合透過  Brython , 在網頁中編寫並執行 Python 程式. \n 了解如何建立簡單的 網際計算機 . \n 延伸簡單的 網際計算機 , 建立工程用計算機. \n 了解如何在網際環境, 利用 Python 進行 2D 繪圖. \n 延伸 網際 2D 繪圖 , 完成正齒輪齒形繪製. \n 延伸網際正齒輪齒形繪製, 完成齒輪減速機 齒面寬設計 運算與囓合圖. \n Python 與  RoboDK \n \n', 'tags': '', 'url': '課程主題.html'}, {'title': '倉儲與網頁', 'text': '本課程網頁的倉儲位於: \n https://github.com/mdecourse/cp2021.git  - Github \n https://gitlab.com/mdecourse/cp2021.git  - Gitlab \n https://bitbucket.org/mdecourse/cp2021.git  -Bitbucket \n https://git.heroku.com/cp2021.git  (cp2021 ~ cp2025 -- heroku2 At Mde dot TW) \n 將同一份資料的改版提交同步至 Github, Gitlab, Bitbucket 與 Heroku: \n Github 上的代號為 origin, 對應至 https://github.com/mdecourse/cp2021.git \n git remote add gitlab https://gitlab.com/mdecourse/cp2021.git \n git remote add bitbucket https://mdecourse@bitbucket.org/mdecourse/cp2021.git \n heroku login 之後 heroku git:remote -a cp2021 (即 git remote add heroku  https://git.heroku.com/cp2021.git ) \n 以上設定與改版資料同步至四種雲端系統後, 若僅一人執行開發, 則相關內容連同近端倉儲, 共計有 5 個備份版本. \n 若專案牽涉 n 人協同, 則每一個時段都將會有至少 n + 4 個備份版本. \n 課程練習: \n CMSiMDE 倉儲的靜態網站該如何設定, 才能分別在 Github, Gitlab, Bitbucket 與 Heroku 平台上進行伺服? \n 註: Gitlab 與 Bitbucket pages 並非可免費使用. Github pages 也可能只有針對教育帳號能免費使用. \n CMSiMDE 倉儲的靜態網站該如何在 Fossil SCM 主機中進行伺服? \n 基礎知識: \n 何謂倉儲 (repository)? \n 何謂靜態網頁 (static web site)? 那麼有動態網頁 (dynamic web site)嗎? \n 何謂(電腦)伺服 (serving)? \n 何謂 Fossil SCM？ \n', 'tags': '', 'url': '倉儲與網頁.html'}, {'title': 'Why Git', 'text': 'Git Book  (中文) \n Beginning Git and Github  (英文) \n What can Git do? \n Remember all those problems we tried to solve at the beginning of this chapter? Well, Git can solve them all. It can even solve problems you didn’t know you had! \n First, it works great with tracking changes. You can \n \n •Go back and forth between versions \n •Review the differences between those versions \n •Check the change history of a file ( git blame ) \n •Tag a specific version for quick referencing \n \n Git is also a great tool for teamwork. You can \n \n •Exchange "changesets" between repositories \n •Review the changes made by others \n \n One of the main features of Git is its Branching system. A branch is a copy of a project which you can work on without messing with the repository. This concept has been around for some time, but with Git, it is way faster and more efficient. Branching also comes along with Merging, which is the act of copying the changesets done in a branch back to the source. \n Generally, you create a branch to create or test a new feature and merge that branch back when you are satisfied with the work. \n There is also a simple concept that you might use a lot: Stashing. \n Stashing is the act of safely putting away your current edits so that you have clean environment to work on something completely different. You might want to use stashing when you are playing around or testing a feature but need to work on a new feature in priority. So, you stash your changes away and begin to write that feature. After you are done, you can get your changes back and apply them to your current working environment.', 'tags': '', 'url': 'Why Git.html'}, {'title': '虛擬主機', 'text': '這裡的虛擬主機系統指利用  https://www.virtualbox.org/  所建立的 Windows 或 Ubuntu 操作系統檔案, 可以在不同實體操作系統中, 進行轉移運作. \n 透過虛擬主機與實體主機間的網路設定, 可以讓使用者進行網際程式開發. \n Virtualbox 網路設定: \n Nat - 虛擬主機可以藉由實體主機的網路架構上網, 但必須透過 Port Mapping 才能以實體主機的網路位址設為聯外 server. \n Host-only Adaptor - 虛擬主機的網路設定自外於任何聯外網路, 因此無法直接上網, 但各 Host 間同群電腦可以互通. \n Bridged Adaptor - 虛擬主機的網路設定與實體主機的網路位階相同, 若實體主機位於外部網段, 則虛擬主機可設為聯外 server. \n Github Actions: \n https://github.com/features/actions \n 應用範例: \n https://github.com/mdecourse/report/blob/main/.github/workflows/demo.yaml \n https://github.com/mdecourse/4072pj1 \n', 'tags': '', 'url': '虛擬主機.html'}, {'title': '編譯 Fossil', 'text': '取得最新的 Fossil SCM 原始碼: \n fossil clone https://www.fossil-scm.org fossil.fossil\ncd wd\nmkdir fossil\ncd fossil\nfossil open ./../../fossil.fossil \n 在  MSYS2  環境中編譯  Fossil SCM  時, 必須先編譯 compat/zlib. \n cd compat/zlib\nmingw32-make -f win32/Makefile.gcc \n 將 Msys2 mingw64/bin/windres.exe 複製一份並改名為 x86_64-w64-mingw32-windres.exe \n 之後, 再退出 compat/zlib 目錄, 回到 wd/fossil 目錄中, 編輯 win/Makefile.mingw, 設定 \n PREFIX = x86_64-w64-mingw32- \n 接著以 mingw32-make -f win/Makefile.mingw 編譯 fossil.exe \n 若要使用 https, 則需要 openssl 程式庫. \n 參考資料: \n https://fossil-scm.org/home/wiki?name=compillingOnWindows \n', 'tags': '', 'url': '編譯 Fossil.html'}, {'title': '可攜系統', 'text': '建立可攜系統在解決 ____ 問題? \n portablekmol_base.7z  (下載 118MB, 解開壓縮後 148MB) \n 包括 data 目錄與 start_ipv6.bat, start_ipv4.bat, stop.bat \n 功能: 啟動後可以啟動 SciTE 編輯器, 可用於類解譯 ANSI C 程式, 以及  Solvespace . \n Python395.7z  (下載 123MB, 解開壓縮後 495MB) \n 功能: 與  portablekmol_base.7z  結合後, 可以利用 SciTE 編輯器執行 Python 程式. \n 請注意: 由於 CMSiMDE 改用  adhoc ssl_context  啟動近端伺服器, 因此 Python 解譯系統必須加裝 pyopenssl 模組: pip install pyopenssl,\xa0 且安裝前要先將系統 proxy 暫時關閉. \n portablegit_2.31.1.7z  (下載 60MB, 解開壓縮後 286MB) \n 功能: 與  portablekmol_base.7z  結合後, 可以利用可攜程式系統的命令列視窗執行 git 指令. \n lua-5.4.3.7z  (下載 662KB, 解開壓縮後 4MB) \n 功能: 與  portablekmol_base.7z  結合後, 可以利用 SciTE 編輯器執行 Lua 程式. \n PUTTY.7z  (下載 940KB, 解開壓縮後 4MB) \n 功能: plink.exe 可以與 git 結合, 利用 Putty.exe 中所設定的 session 名稱進行 SSH 連線. \n msys64_20210419.7z  (下載 3.5GB, 解開壓縮後 12GB) \n 功能:  Msys2  安裝 \n pacman -S mingw-w64-x86_64-toolchain\npacman -Sy mingw-w64-x86_64-qt5\npacman -Sy mingw-w64-x86_64-qt5-static\npacman -Sy mingw-w64-x86_64-ffmpeg\npacman -Sy mingw-w64-x86-64-cmake \n msys64_20210419_clean.7z  (下載 87MB , 解開壓縮後 374MB) \n 功能: 尚未安裝任何 Package 的  Msys2  系統. \n rust_1.53.0_portable_for_msys2.7z  (下載 147MB , 解開壓縮後 1.13GB) \n Erlang 10.7 and Elixir portable.7z  for Windows (下載 62MB , 解開壓縮後 340MB) \n CoppeliaSimEdu_4.1.0_rev1.7z  (下載 183MB, 解開壓縮後 438MB) \n 功能: 可免費提供大學機電資整合課程使用, 且開放原始碼, 可用於機電資控制系統設計與模擬 (InfoMechaTronic control system design and simulation). \n robodk_522.7z  (下載 364MB, 解開壓縮後 1GB) \n 功能: 提供限縮功能版本 Free Trial, 只可模擬但無法存檔, 可用於工業級機械手臂在線與離線控制系統設計與模擬. \n Range3.7z  (下載 27MB, 解開壓縮後 109MB) \n 功能: 開放源 FEM (Finite Element Method) 分析套件. \n webots-R2021a.7z  (下載 1.5GB, 解開壓所後 2.9GB) \n 功能: 採 Apache 2.0 使用授權的開放源套件, 可用於機電資控制系統設計與模擬.', 'tags': '', 'url': '可攜系統.html'}, {'title': 'Lua 解譯', 'text': '\n 網際 Lua 解譯:  http://mde.tw/lab/downloads/lua/index.html \n SciTE 編輯器中的 Lua.properties 設定: \n 選擇利用 y:\\lua-5.4.3\\luac 與 lua 編譯或解譯 .lua 程式檔案. \n command.compile.*.lua=y:\\lua-5.4.3\\luac -o "$(FileName).luc" "$(FileNameExt)"\n# Lua 5.1\ncommand.go.*.lua=y:\\lua-5.4.3\\lua "$(FileNameExt)" \n \n', 'tags': '', 'url': 'Lua 解譯.html'}, {'title': 'CMSiMDE', 'text': 'CMSiMDE ( https://github.com/mdecourse/cmsimde ) 是一套以 Python 與 Flask 框架編寫的網際內容管理系統, \n 使用 CMSiMDE 建議使用者安裝 flask flask_cors bs4 lxml pelican markdown leo 等模組. 其中的 flask flask_cors bs4 lxml pelican markdown為啟動 CMSiMDE 的必要模組, 而 leo 則是 CMSMDE 開發者所使用的大綱管理工具, 可以用於與 CMSiMDE 整合的 Pelican blog 及 Reveal.js 網際簡報編輯之用. \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': '建立網頁', 'text': '由於 CMSiMDE 帶有動態網頁與靜態網頁等兩個部分, 動態網頁執行時需要該伺服器能夠執行 Python 3, 以及 flask flask_cors bs4 lxml pelican markdown 等模組. 而靜態網頁的伺服則只需要 WWW Server 即可. \n 若使用者在 Github 使用 CMSiMDE 建立網頁, 可以透過  https://github.com/mdecourse/cmstemplate  template 建立, 步驟與兩種設定方式如下: \n \n 使用者登入 Github \n 將瀏覽器連線至  https://github.com/mdecourse/cmstemplate  頁面後, 點擊 Use this template 按鈕後, 選擇所要採用的 repository 名稱後, 就可以建立以 CMSiMDE 作為子模組的 Github 倉儲. \n 假如使用者所選擇的倉儲名稱為: 帳號.github.io, 則 Github 會自動設定該倉儲的 main 分支為 Github Pages 根目錄, 意即一旦 Github Pages 完成轉檔 (提交訊息之後會出現綠勾), 則該倉儲的對應網頁將為: https://帳號.github.io \n 若使用利用  https://github.com/mdecourse/cmstemplate  作為 template 所建立的倉儲名稱並非 帳號.github.io, 則使用者必須自行至該倉儲的 settings/Github Pages 選項中將 main branch 設為 Github Pages 對應的 root 目錄. 之後, Github 將會採用: 帳號.github.io/倉儲名稱 作為與該倉儲對應的 Github Pages 網址. \n \n', 'tags': '', 'url': '建立網頁.html'}, {'title': '基本操作', 'text': '當使用者利用 cms.bat 啟用動態網站後, 即可利用瀏覽器  https://localhost:9443  在近端維護網站內容, 由於此時動態網站僅在 localhost 啟動, 因此可以使用內建的管理者密碼 "admin" 登入管理網站內容. \n 在 Windows 操作系統, cms.bat 內容為: \n python cmsimde/wsgi.py \n 若是在 Mac 或 Linux 操作系統, 則 cms 為可執行檔, 且內容為: \n #! /bin/bash\npython3 cmsimde/wsgi.py \n 至於 acp.bat 在 Windows 操作系統的內容為: \n echo off\nset message=%1\ngit add .\ngit commit -m %message%\ngit push \n 但是在 Mac 與 Linux 操作系統, 則 acp 為可執行檔, 而內容則為: \n #! /bin/bash\ngit add .\ngit commit -m "$1"\ngit push \n 在 Windows 執行 batch 檔案, 可以直接在命令列視窗執行 cms 或 acp "提交訊息", 但是在 Mac 與 Linux 執行 Bash 檔案, 必須使用 ./cms 或 ./acp "提交訊息". \n 假如使用者修改 init.py 中的 ip 或 uwsgi 設定, 讓動態網站在外部 IP 啟動, 則必須自行透過動態網站中的  config  指令修改管理者密碼. \n 動態網站編輯表單中的  config  除了可更改網站管理者密碼外, 也可以更改網站的頁面內容標題 (外部標題可以透過 init.py 中的 site_title 更改). \n', 'tags': '', 'url': '基本操作.html'}, {'title': '客製化', 'text': '假如利用  https://github.com/mdecourse/cmstemplate  作為 template 所建立的 Github Pages 網站, 倉儲根目錄中的 cms.bat 可以在執行動態網站系統之後, 利用 pipe 讓 cms.bat 同時開啟 Firefox  https://localhost:9443 \n 修改後的 cms.bat 如下: \n python cmsimde/wsgi.py 1> nul | "C:\\Program Files (x86)\\Mozilla Firefox\\firefox" https://localhost:9443 \n 前面 python cmsimde/wsgi.py 加上 1> nul 的目的是因為 pipe 執行時會將前面指令執行結果轉為隨後執行指令的輸入, 而 1> nul 則會將標準輸出的任何資料移除, 任何輸出不會影響 Firefox 執行. \n', 'tags': '', 'url': '客製化.html'}, {'title': '編輯網頁內容', 'text': '編輯 CMSiMDE 動態網站中的內容, 可以透過表單中的  Edit All  或  Edit  按鈕進行.  Edit  可用於單頁編輯, 操作時先選擇左側的頁面標題, 等系統顯示該頁面內容後, 再點擊上方的  Edit  按鈕即可進入該頁面的編輯模式. \n Edit All  通常用於單次刪除所有頁面內容或者只保留特定頁面用, 點擊後會將所有頁面內容置於編輯器中. \n', 'tags': '', 'url': '編輯網頁內容.html'}, {'title': '上傳與引用檔案', 'text': 'File Upload  可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n 引用使用者上傳的檔案 \n python_book_01.pdf \n', 'tags': '', 'url': '上傳與引用檔案.html'}, {'title': '上傳與引用圖片', 'text': 'Image Upload  可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n 引用使用者上傳的檔案 \n \n \n', 'tags': '', 'url': '上傳與引用圖片.html'}, {'title': '嵌入程式碼', 'text': '利用 Insert/Edit code 功能, 可以嵌入各種程式碼: \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式\n// 設 t 為時間, x 則設為物體的位移\n// dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值\n//\n// 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以\n// h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x\n// 定義函式 rungeKutta, 共有四個輸入變數\nrungeKutta(t0, x0, t, h) {\n  // 利用步階增量值 h 與 t 的起始及終點值\n  // 計算需要迭代的次數 n\n  int n = ((t - t0) / h).toInt();\n  // 宣告 x 為雙浮點數, 且設為起始值 x0\n  double x = x0;\n  // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值\n  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n\n  for (int i = 1; i <= n; i++) {\n    // 將此階段的 t 與 x 值代入 dxdt 函式求下列四個浮點變數值\n    double k1 = h * dxdt(t0, x);\n    double k2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k1);\n    double k3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k2);\n    double k4 = h * dxdt(t0 + h, x + k3);\n    // 利用上述四個變數值求此步階增量後的對應 x 值\n    x = x + (1.0 / 6.0) * (k1 + 2 * k2 + 2 * k3 + k4);\n    // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值\n    // t 起始值配合步階增量值 h, 進行增量\n    t0 = t0 + h;\n  }\n  // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值\n  return x;\n}\n\n// 將微分方程式 "dx / dt = (t - x)/2" 定義為 dxdt 函式\ndxdt(t, x) {\n  return ((t - x) / 2);\n}\n\n// 定義 main() 主函式內容, 目的在利用 rungeKutta 函式\n// 解常微分方程式\nmain() {\n// Driver method\n// num 資料型別可以是整數或雙浮點數\n  num t0 = 0;\n  num x = 1;\n  num t = 2;\n  double h = 0.2;\n  print(\'The value of x at t=$t is: ${rungeKutta(t0, x, t, h)}\');\n}\n \n \n', 'tags': '', 'url': '嵌入程式碼.html'}, {'title': '嵌入影片檔', 'text': '直接利用 Source code 功能, 將影片檔案的 iframe 標註放入後存檔: \n \n', 'tags': '', 'url': '嵌入影片檔.html'}, {'title': '檢視 STL', 'text': '使用 Github 所提供的 STL viewer 嵌入 github.com/mdecourse/cmstemplate main branch 中 downloads 目錄中的 spikeball.stl \n <script src="https://embed.github.com/view/3d/mdecourse/cmstemplate/main/downloads/spikeball.stl"></script> \n 將上列 script 標註放入頁面 HTML 內容後, 可以檢視 STL 零件檔案. \n \n \n \n \n 以 CMSiMDE 內建的 static/viewstl.html 檢視 STL 檔案: \n 使用 iframe 其 src 指向 STL 檔案的絕對 URL 路徑: \n /static/viewstl.html?src=https://mde.tw/cmstemplate/downloads/spikeball.stl \n 就可以如下檢視 downloads/spikeball.stl \n \n', 'tags': '', 'url': '檢視 STL.html'}, {'title': 'Gitlab 同步', 'text': '利用 git remote add gitlab  https://gitlab.com/user/repository.git  可以在近端倉儲中的 .git/config 中新增一個名稱為 gitlab, 且與  https://gitlab.com/user/repository.git  倉儲對應的設定. 使用者可以將此倉儲改版內容以 git push gitlab 推向 Gitlab. \n 至於 Gitlab Pages 額外需要下列 .yml 檔案進行轉換設定: \n .gitlab-ci.yml \n pages:\n  stage: deploy\n  script:\n  - mkdir .public\n  - cp -r * .public\n  - mv .public public\n  artifacts:\n    paths:\n    - public\n  only:\n  - master\nvariables:\n  GIT_SUBMODULE_STRATEGY: recursive \n \n', 'tags': '', 'url': 'Gitlab 同步.html'}, {'title': 'Heroku 部署', 'text': '與 Heroku 部署有關資訊請參考:  https://mde.tw/cp2020/content/Heroku.html \n', 'tags': '', 'url': 'Heroku 部署.html'}, {'title': 'Fossil SCM', 'text': '在 Github 之外, 可以同步將各倉儲資料存放至 Gitlab, Heroku (有 500 MB 容量限制) 與 Fossil SCM. \n 希望整合 Github 與 Fossil SCM 倉儲步驟說明如下: \n 針對 Github 中已經有  https://github.com/mdecourse/cmstemplate  倉儲, 希望同步建  https://fossil.kmol.info/cmstemplate  與之內容同步. \n 登入 fossil.kmol.info 主機, 在 /home/user/repository 目錄中, 以 fossil init cmstemplate.fossil 建立空倉儲. 此時 Fossil SCM 將會列出以登入帳號作為帳號的管理者密碼. \n 管理者利用  https://fossil.kmol.info/cmstemplate  連結, 以 user 登入, 並利用上列管理者密碼進入管理區, 先行透過 Setup/users 變更 user 對應密碼. \n 回到 Windows 以  fossil clone https://user@fossil.kmol.info/cmstemplate cmstemplate.fossil  取下倉儲資料, 過程中將需要輸入與 user 對應的密碼, 並被詢問是否儲存密碼, 若選擇儲存密碼則隨後的 fossil commit 將回自動提交推送. \n 接著在近端必須開啟空 cmstemplate.fossil 倉儲, 主要目的是取得 __FOSSIL__, 並且以 git pull 完整拉下位於  https://github.com/mdecourse/cmstemplate  中的資料並與空 __FOSSIL__ 進行整合. 其中在 Fossil SCM 端必須將 Setup/Settings 中的 default-csp 設為:  https://fonts.googleapis.com  (讓 CMSiMDE 靜態網頁可以在 Fossil SCM doc 頁面中正常顯示), 且勾選 dotfiles (讓 Fossil SCM 可以儲存 .git 中的版本資料). \n \n 參考資料: \n 編譯 Fossil SCM: \n \xa0 http://project.mde.tw/blog/zai-msys2-huan-jing-bian-yi-fossil-scm.html \n', 'tags': '', 'url': 'Fossil SCM.html'}, {'title': '注意事項', 'text': '因為  https://github.com/mdecourse/cmstemplate  將 CMSiMDE 倉儲作為 submodule, 因此使用者利用 cmstemplate 作為 template 後, 必須使用 git clone --recurse-submodules 取下遠端倉儲. \n 例如: \n 若使用者的倉儲 URL 為  https://github.com/mdecourse/cmstemplate \n 則可以在近端利用: \n git clone --recurse-submodules  https://github.com/mdecourse/cmstemplate.git \n 將遠端倉儲資料存入 cmstemplate 目錄中. \n 目前的 cmstemplate 內建 cms.bat 與 acp.bat 等兩個 batch 檔案, 可以協助使用者直接在倉儲根目錄啟動 CMSiMDE 動態網頁, 以及單一指令式即可完成 git add, git commit 以及 git push, 但是前提是使用者必須設定以 ssh 方式與 Github 倉儲進行驗證. \n 例如: \n 若使用者已經將倉儲內容 clone 至近端, 且已經帶有 cmsimde 子模組的內容. \n 則可以在近端命令列進入 cmstemplate 倉儲目錄執行: \n cms.bat \n 開啟動態網頁系統. 並以  https://localhost:9443  開啟. \n 一旦完成動態網頁的編輯, 利用 Generate Pages 可以轉為靜態網站, 且各 html 檔案將位於 content 目錄中. \n 若使用者希望檢查近端靜態網頁的內容, 可以利用 SciTE 開啟倉儲中的 http-server.py, 並利用瀏覽器以  https://localhost:8444  檢查靜態網頁內容. \n 一旦使用者要將近端倉儲的動態與靜態網頁內容推向 Github, 則必須將倉儲中 .git/config 的 url, 從 https 改為 ssh 的連線格式: \n 例如: \n 原先 .git/config origin 的 url 為 url =  https://github.com/mdecourse/cmstemplate.git,  則必須改為: \n url =  git@github.com:mdecourse/cmstemplate.git \n 之後假如使用者要以 "add some files" 字串當作提交說明訊息, 則可以在命令列中的倉儲目錄執行: \n acp.bat "add some files" \n', 'tags': '', 'url': '注意事項.html'}, {'title': '標題選擇', 'text': '由於 CMSiMDE 中的動態網站透過 config/content.htm 的 H1~H3 超文件標註進行分頁, 因此使用者利用 cms.bat 開啟動態網站後, 必須注意各頁面標題文字的選擇: \n \n 頁面標題文字儘量簡短  - 頁面標題就有如文章的章節標題, 只要該標題具有該頁面內容的代表性即可, 越簡短越好. \n 頁面標題文字不要使用標點符號  - 因為標點符號中的 "/" 會造成頁面擷取時 URL 指令分段上的誤判, 至於標題文字中若有 ":" 則會在動態內容轉靜態內容時, 因 Windows 不允許檔案名稱帶有 ":" 而無法轉檔. \n 頁面標題中不可以有超文件標註  - 由於 CMSiMDE 動態網站編輯器採用 GUI 進行, 採用滑鼠標修頁面標題時, 可能無意中將 HTML 標註放入 H1~H3 標題文字中, 如此可能會造成 CMSiMDE 分頁錯誤而無法開啟動態網站. 當使用者要檢查所使用的頁面標題是否帶有 html 標註, 可以透過編輯功能中的 Source Code 檢查. \n H1 標題數量不可過多  - 由於 CMSiMDE 的靜態網站支援手機模式, 當頁面 H1 標題數量超過 10 個之後, 頁面標題可能無法在螢幕上最上方以一列顯示, 而是必須出現在第二行, 結果將會導致頁面展開時的 Javascript 程式產生錯亂, 結果為無法直接以滑鼠點擊進入特定頁面. \n \n \n \n', 'tags': '', 'url': '標題選擇.html'}, {'title': '靜態網頁 404', 'text': '當使用者將近端網頁倉儲資料推向 Github 後, commit 提交訊息之後若沒有出現綠勾, 表示靜態網頁無法轉檔成功, 這時連接靜態網頁時, 將會出現 404, 通常情況下是因為倉儲中 cmsimde 子模組的版次無法與遠端  https://github.com/mdecourse/cmsimde  中的版本對應. \n 上述靜態網頁出現 404 錯誤訊息的處理方式如下: \n \n 從  https://github.com/mdecourse/cmsimde  倉儲中複製最新版本的版次號, 以  2021/03/03 的版次 為例, 版次號為 1c3aeec1f5d26b421743d2f5ef8bb7d5b99292af, 使用者只需要最前面的 7 個字元, 也就是 1c3aeec. \n 然後在近端倉儲中, 以命令列進入 cmsimde 目錄後執行:  git checkout 1c3aeec \n 接著退回倉儲目錄, 以 git add, git commit 及 git push 將倉儲改版內容推向 Github 後應該就可以將倉儲正確轉為靜態網站內容. \n \n', 'tags': '', 'url': '靜態網頁 404.html'}, {'title': '動態網站錯誤', 'text': 'CMSiMDE 動態網站經常出現的錯誤是無法對 config/content.htm 分頁, 這時可以利用 SCiTE 編輯 content.htm, 找尋是否 H1~H3 標註中是否帶有特殊符號, 如 "/" 或 ":" 等. \n', 'tags': '', 'url': '動態網站錯誤.html'}, {'title': '延伸開發', 'text': '為了建立 responsive site: \n 靜態網頁: \n Javascript 程式庫: \n https://getbootstrap.com/ \n 動態系統: \n Javascript editor \n TinyMCE:  https://www.tiny.cloud/ \n Syntax highlighter:  https://prismjs.com/ \n Ajax bit by bit file uploader: \n Flask \n Flask_cors \n bs4 \n lxml \n markdown \n', 'tags': '', 'url': '延伸開發.html'}, {'title': '已知問題', 'text': 'cmsimde 是一套始終修改中的機械設計工程導向網際內容管理系統, 由於自 2013 年底開發至今, Python 已經從 3.6 進展到 3.9, 網際發展方向也從 html editor 趨向 markdown editor, WebGL 相關技術與 three.js 的整合也越發成熟. \n 因此面對 \n https://github.com/mdecourse/virtualkossel \n http://mde.tw/virtualkossel/ \n cmsimde 應該要導入更多動態零組件展示與互動相關的機械設計功能. \n 可以著力的方向: \n Fusion 360  \n https://github.com/AutodeskFusion360 \n https://stromberg.dnsalias.org/~strombrg/pybrowser/python-browser.html \n https://vpython.org/ \n https://www.glowscript.org/ \n https://github.com/slembcke/Chipmunk2D \n http://www.pymunk.org/en/latest/ \n https://github.com/mrjleo/python-physics-demos \n cango3d library:  https://www.arc.id.au/Canvas3DGraphics.html \n', 'tags': '', 'url': '已知問題.html'}, {'title': 'IPv6', 'text': '參考:  https://github.com/tinymce/tinymce/issues/4409  中的  url parsing 修改 後, 目前已經可以在 local 與 IPv6 網路連線中啟用 tinymce4 editor. \n', 'tags': '', 'url': 'IPv6.html'}, {'title': 'MathJax', 'text': 'MathJax 引用問題: \n https://www.mathjax.org/ \n', 'tags': '', 'url': 'MathJax.html'}, {'title': 'html 分頁', 'text': '分頁失敗時會意外抹除 config\\content.htm 中的所有內容 \n 分頁失敗並不會提供 debug 建議 \n', 'tags': '', 'url': 'html 分頁.html'}, {'title': 'template', 'text': 'cmsimde 針對利用 Flask 產生頁面並未使用 Template, 為了讓程式更加模組化可以考慮納入  Mako  template engine. \n', 'tags': '', 'url': 'template.html'}]};