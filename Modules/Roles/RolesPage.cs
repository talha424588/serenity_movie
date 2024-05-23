
namespace MyProject.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Roles"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RolesRow))]
    public class RolesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Roles/RolesIndex.cshtml");
        }
    }
}