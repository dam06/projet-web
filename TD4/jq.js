$(document).ready
(
    function ()
    {
        $("#req_get").click(function() {
            $.getJSON(
                'index1.php',
                {
                    'nom' : 'demiautte',
                    'prenom' : 'damien'
                },
                function(data) {
                    console.log(data);
                }
            );
        });

        $("#req_post").click(function() {
            $.get("index1.php?name=demiautte&prenom=damien", function(data) {
                console.log(data);
                //name:"demiautte", prenom:"Damien"
            });
        });

        document.getElementById("req_get").addEventListener("click", sendReq1);
        document.getElementById("req_post").addEventListener("click", sendReq2);
    }
)


