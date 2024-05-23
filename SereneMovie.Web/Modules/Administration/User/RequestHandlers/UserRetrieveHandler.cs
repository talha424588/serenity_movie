﻿using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneMovie.Administration.UserRow>;
using MyRow = SereneMovie.Administration.UserRow;


namespace SereneMovie.Administration;
public interface IUserRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
public class UserRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUserRetrieveHandler
{
    public UserRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}