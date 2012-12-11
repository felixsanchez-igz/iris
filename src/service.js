(function() {

    var Service = function() {};

    Service.prototype = new iris.Settable();

    Service.prototype.ajax = function(p_method, p_path, p_params, f_success, f_error) {

        var type = this.setting("type");
        var path = this.setting("path");

        iris.ajax({
            "url": (path ? path : "") + p_path,
            "type": p_method,
            "data": p_params,
            "cache": false,
            "dataType": (type ? type : "json"),
            "async": true,
            "success": f_success,
            "error": f_error // function (p_request, p_textStatus, p_errorThrown)
        });
    };

    Service.prototype.get = function(p_path, f_success, f_error) {
        this.ajax("GET", p_path, null, f_success, f_error);
    };

    Service.prototype.del = function(p_path, f_success, f_error) {
        this.ajax("DELETE", p_path, null, f_success, f_error);
    };

    Service.prototype.put = function(p_path, p_params, f_success, f_error) {
        this.ajax("PUT", p_path, p_params, f_success, f_error);
    };

    Service.prototype.post = function(p_path, p_params, f_success, f_error) {
        this.ajax("POST", p_path, p_params, f_success, f_error);
    };

    iris.service = function (f_service) {
        var serv = new Service();
        serv.cfg = {};
        f_service(serv);
        return serv;
    };

})();