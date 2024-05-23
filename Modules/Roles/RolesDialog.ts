
namespace MyProject {

    @Serenity.Decorators.registerClass()
    export class RolesDialog extends Serenity.EntityDialog<RolesRow, any> {
        protected getFormKey() { return RolesForm.formKey; }
        protected getIdProperty() { return RolesRow.idProperty; }
        protected getLocalTextPrefix() { return RolesRow.localTextPrefix; }
        protected getNameProperty() { return RolesRow.nameProperty; }
        protected getService() { return RolesService.baseUrl; }
        protected getDeletePermission() { return RolesRow.deletePermission; }
        protected getInsertPermission() { return RolesRow.insertPermission; }
        protected getUpdatePermission() { return RolesRow.updatePermission; }

        protected form = new RolesForm(this.idPrefix);

    }
}