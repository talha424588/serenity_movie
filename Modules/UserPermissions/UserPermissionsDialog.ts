
namespace MyProject {

    @Serenity.Decorators.registerClass()
    export class UserPermissionsDialog extends Serenity.EntityDialog<UserPermissionsRow, any> {
        protected getFormKey() { return UserPermissionsForm.formKey; }
        protected getIdProperty() { return UserPermissionsRow.idProperty; }
        protected getLocalTextPrefix() { return UserPermissionsRow.localTextPrefix; }
        protected getNameProperty() { return UserPermissionsRow.nameProperty; }
        protected getService() { return UserPermissionsService.baseUrl; }
        protected getDeletePermission() { return UserPermissionsRow.deletePermission; }
        protected getInsertPermission() { return UserPermissionsRow.insertPermission; }
        protected getUpdatePermission() { return UserPermissionsRow.updatePermission; }

        protected form = new UserPermissionsForm(this.idPrefix);

    }
}