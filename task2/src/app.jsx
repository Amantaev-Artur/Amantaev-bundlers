import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/header.jsx";
import Article from "./components/article.jsx";
  
const header = "Header";
const article = "Article Article Article Article Article Article Article";
  
ReactDOM.createRoot(
    document.getElementById("src")
)
.render(
    <div>
        <Header text={header} />
        <Article content={article} />
    </div>
);
