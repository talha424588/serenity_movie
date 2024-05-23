
namespace MyProject.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("UserRoles"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserRolesRow))]
    public class UserRolesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/UserRoles/UserRolesIndex.cshtml");
        }
    }
}