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
  ve diğer attributelarda jsx attribute u olduğu için camelcase olarak yazılır.
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


// import React from "react";
// import ReactDOM from "react-dom";

// const name = "Ahmet";
// let luckyNum = name === "Ahmet" ? Math.floor(Math.random() * 10) : 1;

// ReactDOM.render(
//   <h1>
//     {name}'s lucky number is {luckyNum}
//   </h1>,
//   document.getElementById("root")
// );
