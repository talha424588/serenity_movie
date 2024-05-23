
namespace MyProject.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Roles")]
    [BasedOnRow(typeof(Entities.RolesRow), CheckNames = true)]
    public class RolesForm
    {
        public String RoleName { get; set; }
    }
}