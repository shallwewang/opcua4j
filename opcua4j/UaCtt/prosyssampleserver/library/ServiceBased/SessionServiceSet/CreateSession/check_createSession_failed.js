include("./library/ClassBased/UaResponseHeader/check_responseHeader_failed.js")
// the service is expected to fail

// This function checks if the server returned the expected error code
// Request is of Type UaCreateSessionRequest
// Response is of Type UaCreateSessionResposne
// ExpectedServiceResult is object of type ExpectedAndAcceptedResults (defined in Base/Objects/expectedResults.js)
function checkCreateSessionFailed( Request, Response, ExpectedServiceResults )
{
    // check in parameters
    if( arguments.length !== 3 )
    {
        addError( "function checkCreateSessionFailed(Request, Response, ExpectedServiceResults): Number of arguments must be 3" );
        return( false );
    }
    // check response header
    return( checkResponseHeaderFailed( Request.RequestHeader, Response.ResponseHeader, ExpectedServiceResults ) );
}