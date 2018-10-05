if (process.env.NODE_ENV === 'production') {
    module.exports = {
        ADMIN_API_URL: '',
        API_HEADER: {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",

            }
        }

    };
} else {
    module.exports = {
        ADMIN_API_URL: '',
        API_HEADER: {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",

            }
        },
    };
}
