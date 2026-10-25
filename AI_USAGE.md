# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s): ChatGPT
- What I asked for: Help making timeline to develop CampusEats based on the Course Overview.
- What I kept, changed or rejected, and why:
    kept: the basic structure of Header.jsx, Footer.jsx. Reason as the first base of our website.
    changed: Having folder /src/components.
    rejected: "< li>Vendors< /li>" , because its not follow the suppose looks of the header.
- One thing the AI got wrong and how I fixed it: remove "< li>Vendors< /li>" 

## Week 2
- Tool(s): None
- What I asked for: None
- What I kept, changed or rejected, and why: None
- One thing the AI got wrong and how I fixed it: None

## Week 2.5
- Tool(s): ChatGPT
- What I asked for: Where should I put .css file? /src/App.css or inside /src/components file?
- What I kept, changed or rejected, and why: add another file /src/components/style separate .css file and .jsx file
- One thing the AI got wrong and how I fixed it: thinking it was.. 
```
import "./Header.css";
```
 so imedietly change into 
```
import "./styles/Header.css";
```

## Week 3
- Tool(s): Claude
- What I asked for: Help combining the Week 2 code with the Week 3 sheet:
  App.jsx with fetch and cart state, CartItem, CheckoutForm validation,
  vendors.json, and fixing errors.
- What I kept, changed or rejected, and why: 
    Keep: The structure with view and content, the reduce-based cart count and total, and
    Change: TODOS, read how each one works.
    Rejected: not delete .\src\components\data\vendors.js. Felt best for refernces in future.
  immutable cart updates, because they match the sheet.
- One thing the AI got wrong and how I fixed it: AI messed up every components which making the stucture of the App confusing and unreadable. To mitigate that, I start over from Week 2 to construct the stucture tidyly and easy to read. Some mistake made by AI agent itself are at line 1. useState is imported twice, which looks like import {useState,useState} from 'react'. Another duplicated around line 42-45 is 
    ```
        return () => controller.abort()
  }, [reloadKey])

    return () => controller.abort()      // <-- delete this line
  }, [reloadKey])                        // <-- delete this line (line 45, the one in the error)
  ```
  after delete one of those, it should be read and the page is working.