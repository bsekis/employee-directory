(this.webpackJsonpemployeedirect=this.webpackJsonpemployeedirect||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"firstName":"Peter","lastName":"Gibbons","department":"Sales","role":"Sales Associate","location":"Cubicle","imgUrl":"https://cdn.quotesgram.com/img/38/8/928497819-OfficeSpace_122Pyxurz.jpg"},{"id":2,"firstName":"Bill","lastName":"Lumbergh","department":"Management","role":"Manager","location":"Office","imgUrl":"https://miro.medium.com/max/1400/1*iPUvOx5AIkrbS-KYR7aFUg.png"},{"id":3,"firstName":"Michael","lastName":"Bolton","department":"IT","role":"Developer","location":"Cubicle","imgUrl":"https://i.imgflip.com/1ban6q.jpg"},{"id":4,"firstName":"Samir","lastName":"Nagaheenanajar","department":"IT","role":"Developer","location":"Cubicle","imgUrl":"https://66.media.tumblr.com/4a0f787833228689cbec6cd578bfcb0f/tumblr_mfrj343AYO1s1kqrno1_500.jpg"},{"id":5,"firstName":"Milton","lastName":"Waddams","department":"Customer Support","role":"Associate","location":"Cubicle","imgUrl":"https://cdn.costumewall.com/wp-content/uploads/2017/03/milton-waddams.jpg"},{"id":6,"firstName":"Bob","lastName":"Slydell","department":"Human Resources","role":"Associate","location":"Office","imgUrl":"https://movie-fanatic-res.cloudinary.com/iu/s--T4WWsvOy--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1364991007/bob-slydell.jpg"},{"id":7,"firstName":"Tom","lastName":"Smykowski","department":"Customer Support","role":"Associate","location":"Cubicle","imgUrl":"https://i.pinimg.com/originals/d5/29/d7/d529d72e65adb201168e2e8a10d9e383.jpg"},{"id":8,"firstName":"Bob","lastName":"Porter","department":"Human Resources","role":"Associate","location":"Office","imgUrl":"https://photos1.blogger.com/blogger/2403/681/1600/bob2a.2.jpg"},{"id":9,"firstName":"Joanna","lastName":"Gibbons","department":"Support","role":"Office Administrator","location":"Cubicle","imgUrl":"https://www.hollywoodoutbreak.com/wp-content/uploads/2015/08/office-space-flair-350x262.jpg"},{"id":10,"firstName":"Lawrence","lastName":"Neighbor","department":"Support","role":"Intern","location":"Floating","imgUrl":"https://www.sfexaminer.com/wp-content/uploads/2019/01/190122-SFE-M-ABaderA.jpg"}]')},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(2),s=a.n(n),l=(a(14),a(3)),c=a(4),m=a(5),i=a(8),d=a(7);a(15);var p=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4 col-md-2"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:"".concat(e.firstName," ").concat(e.lastName),src:e.image}))),o.a.createElement("div",{className:"col-8 col-md-10"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6 col-xl-3"},o.a.createElement("strong",{className:"text-warning"},"Name:")," ",e.firstName," ",e.lastName),o.a.createElement("div",{className:"col-12 col-md-6 col-xl-3"},o.a.createElement("div",{className:""},o.a.createElement("strong",{className:"text-warning"},"Location:")," ",e.location)),o.a.createElement("div",{className:"col-12 col-md-6 col-xl-3"},o.a.createElement("strong",{className:"text-warning"},"Role:")," ",e.role),o.a.createElement("div",{className:"col-12 col-md-6 col-xl-3"},o.a.createElement("strong",{className:"text-warning"},"Department:")," ",e.department))))))};a(16);var u=function(e){return o.a.createElement("div",{className:"wrapper bg-dark"},e.children)},g=a(6),h=(a(17),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={employees:g,searchTerm:"",searchSetting:"searchBy",sortSetting:"sortBy",sortOrder:"asc"},e.handleChange=function(t){var a=t.target.value,r=t.target.name;e.setState(Object(l.a)({},r,a)),e.renderEmployees()},e.returnEmployeeCard=function(e){return o.a.createElement(p,{key:e.id,image:e.imgUrl,firstName:e.firstName,lastName:e.lastName,department:e.department,role:e.role,location:e.location})},e.sortEmployees=function(){var t=e.state.sortSetting;e.state.employees.sort((function(a,r){var o,n;return"sortBy"===e.state.sortSetting?(o=a.id,n=r.id):(o=a[t].toLowerCase(),n=r[t].toLowerCase()),"asc"===e.state.sortOrder?o<n?-1:o>n?1:0:"desc"===e.state.sortOrder?o<n?1:o>n?-1:0:void 0}))},e.renderEmployees=function(){return e.sortEmployees(),e.state.employees.map((function(t){if(t[e.state.searchSetting]){if(""===e.state.searchTerm||t[e.state.searchSetting].toLowerCase().includes(e.state.searchTerm.toLowerCase()))return e.returnEmployeeCard(t)}else if(t.firstName.toLowerCase().includes(e.state.searchTerm.toLowerCase())||t.lastName.toLowerCase().includes(e.state.searchTerm.toLowerCase())||t.location.toLowerCase().includes(e.state.searchTerm.toLowerCase())||t.role.toLowerCase().includes(e.state.searchTerm.toLowerCase())||t.department.toLowerCase().includes(e.state.searchTerm.toLowerCase()))return e.returnEmployeeCard(t)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement(u,null,o.a.createElement("h1",{className:"title text-light"},"\ud83d\udcbc Employees"),o.a.createElement("form",{className:""},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-7"},o.a.createElement("div",{className:"form-group form-inline"},o.a.createElement("input",{type:"text",name:"searchTerm",placeholder:"Search...",className:"form-control",value:this.state.searchTerm,onChange:this.handleChange}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("select",{className:"form-control",id:"searchSetting",name:"searchSetting",value:this.state.searchSetting,onChange:this.handleChange},o.a.createElement("option",{value:"searchBy"},"Search by..."),o.a.createElement("option",{value:"firstName"},"First Name"),o.a.createElement("option",{value:"lastName"},"Last Name"),o.a.createElement("option",{value:"department"},"Department"),o.a.createElement("option",{value:"role"},"Role"),o.a.createElement("option",{value:"location"},"Location"))))),o.a.createElement("div",{className:"col-12 col-md-5"},o.a.createElement("div",{className:"form-group form-inline"},o.a.createElement("select",{id:"sort",className:"form-control",name:"sortSetting",value:this.state.sortSetting,onChange:this.handleChange},o.a.createElement("option",{disabled:!0,value:"sortBy"},"Sort by..."),o.a.createElement("option",{value:"firstName"},"First Name"),o.a.createElement("option",{value:"lastName"},"Last Name"),o.a.createElement("option",{value:"department"},"Department"),o.a.createElement("option",{value:"role"},"Role"),o.a.createElement("option",{value:"location"},"Location")),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("label",{className:"form-control btn ".concat("asc"===this.state.sortOrder?"btn-warning":"btn-outline-warning")},o.a.createElement("input",{type:"radio",name:"sortOrder",id:"asc",value:"asc",checked:"asc"===this.state.sortOrder,onChange:this.handleChange})," Asc"),o.a.createElement("label",{className:"form-control btn ".concat("desc"===this.state.sortOrder?"btn-warning":"btn-outline-warning")},o.a.createElement("input",{type:"radio",name:"sortOrder",id:"desc",value:"desc",checked:"desc"===this.state.sortOrder,onChange:this.handleChange})," Desc")))))),this.renderEmployees())}}]),a}(o.a.Component));s.a.render(o.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.21ce58cf.chunk.js.map