
namespace MyProject.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("UserPermissions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserPermissionsRow))]
    public class UserPermissionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/UserPermissions/UserPermissionsIndex.cshtml");
        }
    }
}