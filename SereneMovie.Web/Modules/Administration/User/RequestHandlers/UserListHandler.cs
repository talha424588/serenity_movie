using MyRequest = SereneMovie.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneMovie.Administration.UserRow>;
using MyRow = SereneMovie.Administration.UserRow;

namespace SereneMovie.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}