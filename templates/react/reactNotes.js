/*
single page application oluşturmak için kullanılır.
react componentleri büyük harfle başlamalı camel case değil. ör: <MyButton /> htlm tagleriyle karışmaması için.

JSX => Java Script Xml 
jsx react de kullanılır
Babel jsx syntaxını javascripte dönüştürerek tarayıcıda çalıştırılabilir hale getirir
bir component sadece bir tane jsx i döndürebilir o yüzden en dışa container olacak şekilde bir tag eklenmeli veya
<>
bu şekilde boş bir tag de eklenebilir
</>

react javascript library si olarak başladı ama sonradan framework olarak kabul edilecek birçok özellik ve araç eklendi

framework projeye yapılandırılmış bir çerçeve sağlar ve belirli kuralları vardır o kuralların dışına çıkarak
kullanılamaz. belirli bir mimarisi vardır. 
ör: react,vue
library için ör: jquery => projenin tamamını etkilemez

herzaman root id li div oluştururuz. ve sonradan oluşturacağımız her şey bu root idli divin içinde olur.

JSX, React uygulamalarında kullanılan özel bir dil yapısıdır ve doğrudan tarayıcılar tarafından anlaşılamaz. Bu nedenle, Babel tarafından JSX kodları, tarayıcıların anlayabileceği JavaScript kodlarına dönüştürülür.
jsx sayesinde javascript içine html kodu yazabiliriz, ve html içine javascript kodu yazabiliriz
html in içinde javascript değişkeni yazmak için {} kullanılır. ve köşeli parantez içinde istediğimiz javascript
expressionunu yazabiliriz. ama statment yazılamaz. 
ör: 
{
  if(name == "Hakan"){
    return 9;
  }else{
    return 5;
  }
}
bu bir statement olduğu için yazılamaz.
expression olması için bir değeri ifade etmesi lazım. ör: Math.random()*10

vanilla javascriprt => saf javascript


ReactDOM.render(what to show , where to show it)
*/

import React from 'react';
import ReactDOM from 'react-dom';


const name = "Ahmet";

ReactDOM.render(
<div> 
  <h1 className='heading'>{name}'s favorite movies</h1>
  {/* reactin içinde html elementlerine class vermek için class yerine className kullanılır.
  ve diğer attributelar için de jsx attribute u olduğu için camelcase olarak yazılır.
  ör: html de : contenteditable
  jsx de : contentEditable 
  */}
  <ul>
    <li>Whiplash</li>
    <li>Kutsal Geyiğin Ölümü</li>
    <li>Zindan Adası</li>
  </ul>
</div>  
  , document.getElementById('root')
);


import React from "react";
import ReactDOM from "react-dom";

const name2 = "Ahmet";
let luckyNum = name2 === "Ahmet" ? Math.floor(Math.random() * 10) : 1;

ReactDOM.render(
  <h1 style={{color:"red"}}>
    {name2}'s lucky number is {luckyNum}
  </h1>,
  document.getElementById("root")
);
// jsx in içinde inline css eklemek istediğimizde html de olduğu gibi <h1 style="color:red"></h1>
// bu şekilde yazamayız. jsx de yani react de style ı javascript objecti olarak vermemiz lazım yani {} içinde
/*
{
  key : value
}
şeklinde vermeliyiz.
burada value string olmalı.
{
  color : "red",
  margin : "auto"
}
şeklinde


{{color:"red"}} burada dıştaki köşeli parantezler html in içinde javascript kodu yazdığımız için konuluyor.
içerdeki köşeli parantezler javascript objecti olduğu için konuluyor.
*/

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "yellow",
  fontSize : "20px", // normalde css içinde font-size (kebab-case) şeklinde kullanılır ama js de camelCase şeklinde kullanırız.
  border : "1 px solid red"
}

// sonradan bu customStyle ı değiştirebiliriz ör:
// customStyle.color = "blue";
// jsx içinde inline style ı uygulamak belirli bir olay olduğunda css i değiştirmek için kullanışlıdır.
// ör: kullanıcı buttona tıkladığında div'in rengi değişsin.

function changeColor(){
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}> 
    {/* customStyle javascript değişkeni olduğu için köşeli parantez koyduk jsx in içinde js yazmak için. */}
    change color 
    </h1>
    <button onClick={changeColor()}>
      click to change heading's color
    </button>
  </div>,
  document.getElementById("root")
);


import React from "react";
import ReactDOM from "react-dom";

let text = "";
const hour = new Date().getHours();
const time = new Date().getHours() + ":" + new Date().getMinutes();
let customStyle2 = {
  color: "black"
};

if (hour >= 12 && hour < 18) {
  text = "Good afternoon";
  customStyle2.color = "yellow";
} else if (hour >= 18 && hour < 5) {
  text = "Good Night";
  customStyle2.color = "green";
} else if (hour >= 5 && hour < 12) {
  text = "Good Morning";
  customStyle2.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle2}>
    {text} time is {time}
  </h1>,
  document.getElementById("root")
);

// react componentleri PascalCase şeklinde yazılır.

import React from "react";
import ReactDOM from "react-dom";


function Heading(){
  return <h1>This is a heading</h1>
}

ReactDOM.render(
  <div>
    <Heading /> 

    {/* componentleri PascalCase şeklinde yazmamızın nedeni html tagleri ile karıştırılmaması içindir,.
    eğer bir tagin veya componentin içinde bir şey yoksa best practice self closing tag şeklinde kullanmaktır.
    ve / den önce bir boşluk bırakmaktır <Heading /> şeklinde.
    componentleri jsx dosyası şeklinde oluşturup öyle kullanmak daha iyidir.
    ve her componentin(jsx) dosyasının başına import React from 'react' ; yazarak react modülünü dahil etmemiz gerek
    ve her componentin sonunda export default component_name ile ( ör: export default Heading) componenti dışarı
    aktarmamız gerek. ve index.js doyasında bu componenti kullanabilmek için import Heading from "./Heading"
    i index.js e yazmamız ve içeri aktarmamız gerek. 
    */}
  </div>,
  document.getElementById("root")
);

// component ör:
// List.jsx dosyası içinde:

// import React from 'React';
// function List(){
//   return 
//   <ul>
//     <li>aaa</li>
//     <li>bbbb</li>
//     <li>cccc</li>
//   </ul>
// }

// export default List;

//----------------------
/*
index.js içine tüm componentleri ayrı ayrı import etmek yerine bir tane App.jsx dosyası oluşturulur
ve App.jsx in içine tüm componnetler import edilir. ve index.js de sadece <App /> render edilir .

çok fazla componentimiz olduğunda karışıklık olmaması için src klasörünün içine components diye bir klasör 
oluşturulur ve componentler bu klasörün içine koyulur
*/