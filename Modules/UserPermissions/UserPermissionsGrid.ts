
namespace MyProject {

    @Serenity.Decorators.registerClass()
    export class UserPermissionsGrid extends Serenity.EntityGrid<UserPermissionsRow, any> {
        protected getColumnsKey() { return 'UserPermissions'; }
        protected getDialogType() { return UserPermissionsDialog; }
        protected getIdProperty() { return UserPermissionsRow.idProperty; }
        protected getInsertPermission() { return UserPermissionsRow.insertPermission; }
        protected getLocalTextPrefix() { return UserPermissionsRow.localTextPrefix; }
        protected getService() { return UserPermissionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}