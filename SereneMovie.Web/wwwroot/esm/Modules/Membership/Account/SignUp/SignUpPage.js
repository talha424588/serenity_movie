import{b as m,c as u,d as e,e as c}from"../../../../_chunks/chunk-6XCVVH7E.js";import{a as r}from"../../../../_chunks/chunk-OUOWSKZY.js";import{a as f,c as n,f as p,i as d}from"../../../../_chunks/chunk-THKE7DQS.js";var h=p(d(),1),i=p(d(),1);function v(y){new a(f({element:"#SignUpPanel"},y))}n(v,"pageInit");var s=r.Forms.Membership.SignUp,l=class l extends h.PropertyPanel{constructor(t){super(t);this.form=new m(this.idPrefix),this.form.Email.element.attr("autocomplete","off"),this.form.Password.element.attr("autocomplete","new-password"),this.form.ConfirmEmail.addValidationRule(this.uniqueName,o=>{if(this.form.ConfirmEmail.value!==this.form.Email.value)return r.Validation.EmailConfirm}),this.form.ConfirmPassword.addValidationRule(this.uniqueName,o=>{if(this.form.ConfirmPassword.value!==this.form.Password.value)return r.Validation.PasswordConfirmMismatch})}getFormKey(){return m.formKey}submitClick(){if(this.validateForm()){var t=this.propertyGrid.save();delete t.ConfirmEmail,delete t.ConfirmPassword,(0,i.serviceCall)({url:(0,i.resolveUrl)("~/Account/SignUp"),request:t,onSuccess:o=>{(0,i.informationDialog)(s.Success,()=>{window.location.href=(0,i.resolveUrl)("~/")})}})}}renderContents(){let t=this.useIdPrefix();this.element.empty().append(e(u,{children:[e(c,{}),e("div",{class:"s-Panel p-4",children:[e("h5",{class:"text-center my-4",children:s.FormTitle}),e("p",{id:t.FormInfo,class:"text-center",children:s.FormInfo}),e("form",{id:t.Form,action:"",autoComplete:"off",children:[e("input",{autoComplete:"false",name:"hidden",type:"text",style:"display:none;"}),e("div",{id:t.PropertyGrid}),e("div",{class:"px-field",children:e("button",{id:t.SubmitButton,type:"submit",class:"btn btn-primary my-4 w-100",onClick:o=>{o.preventDefault(),this.submitClick()},children:s.SubmitButton})})]})]})]}))}};n(l,"SignUpPanel");var a=l;export{v as default};
//# sourceMappingURL=SignUpPage.js.map
