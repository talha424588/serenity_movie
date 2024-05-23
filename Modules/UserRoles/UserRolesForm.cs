
namespace MyProject.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("UserRoles")]
    [BasedOnRow(typeof(Entities.UserRolesRow), CheckNames = true)]
    public class UserRolesForm
    {
        public Int32 UserId { get; set; }
        public Int32 RoleId { get; set; }
    }
}