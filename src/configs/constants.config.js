export const MESSAGE = {
    TYPE:{
        SUCCESS: "success",
        ERROR: "error",
        INFO: "info",
        WARNING: "warning",
    },
    APP:{
        SERVER_LISTENER: "Server is listening on port PORT",
    },
    DATABASE: {
        CONNECTION_SUCCESS: "The connection to the database has been established successfully",
        CONNECTION_FAILURE: "Unable to connect to the database:",
        DUPLICATE_VALUE: "Duplicate value"
    },
    ERROR:{
        SOMETHING_WRONG: "Something went wrong",
    },
    CRUD:{
        LIST: "NAME list",
        CREATE: "NAME created",
        FIND: "NAME found",
        MODIFY: "NAME modified",
        DELETE: "NAME deleted" 
    },
    VALIDATOR:{
        REQUIRED: "The NAME is required",
        IS_STRING: "The NAME must be a string",
        IS_NUMERIC: "The NAME must be a number",
        IS_EMAIL: "The NAME must be a valid email",
        IS_BOOLEAN: "The NAME must be a boolean",
        NOT_EMPTY: "The NAME can not be empty",
        NOT_NUMERIC: "The NAME must not be numeric",
        NOT_BOOLEAN: "The NAME must be a boolean",
        NOT_NULL: "The NAME must not be null",
        NOT_UNDEFINED: "The NAME must not be undefined",
        NOT_EMAIL: "The NAME must be a valid email",
    },
}