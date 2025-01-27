function FindProxyForURL(url, host) {
    // Configuración del proxy
    var proxy = "PROXY 104.239.43.124:5852";
    var auth = "lzosmzgy:n613p5egpwxc";

    // Lista de dominios que no usarán el proxy
    var direct = [
        "*.example.com",
        "localhost",
        "127.0.0.1"
    ];

    // Verificar si el host está en la lista de dominios directos
    for (var i = 0; i < direct.length; i++) {
        if (shExpMatch(host, direct[i])) {
            return "DIRECT";
        }
    }

    // Devolver la configuración del proxy con autenticación
    return "PROXY " + proxy + "; AUTH " + auth;
}