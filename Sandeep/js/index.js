var searchResponse = null

function showColumns(tableName) {
    var response = searchResponse
    var len = response['data'].length;
    var columnElement = "<table class=\"table table-hover\"> <thead> <tr> <th scope=\"col\">#</th> <th scope=\"col\">Column Name</th>  </tr> </thead> <tbody>"
    var columnEntry = "";
    var j = 1;
    for(var i = 1; i <=  len; i++){
        var entry = response['data'][i-1];
        if(entry['parent_objective_id'] == tableName){
        columnEntry += "<tr> <th scope=\"row\">"+j+" </th> <td> "+ entry['title'] +"</td> </tr>"
        
        j++;
        console.log(columnElement);
        }
    }
        columnElement += columnEntry + "</tbody> </table>"
        $("#table-details-modal").find(".modal-body").html(columnElement);
        $("#table-details-modal").find(".modal-title").text(tableName);
        $("#table-details-modal").modal('toggle');

    }

function button123(){

    document.querySelector(".popup").style.display = "none";
}

function temp(){
    var input;
    input = document.getElementById('inputPassword2').value;
    console.log(input);


    $.ajax({
        url: "https://okrcentral.github.io/sample-okrs/db.json",
        type: "GET",
        success: function(response) {
            searchResponse = response
            var len = response['data'].length;
            var tableElement = "<table class=\"table table-hover\"> <thead> <tr> <th scope=\"col\">#</th> <th scope=\"col\">Title</th>   </tr> </thead> <tbody>";
            var tableEntry = "";
            var j = 1;
            for(var i = 1; i <= len; i++){
                var entry = response['data'][i-1];    
                if(entry["category"] == input){
                    if( entry["parent_objective_id"]== "" ){
                        tableEntry += "<tr> <th scope=\"row\">"+j+" </th> <td> "+ entry["title"] +"</td> " + "<td scope=\"col\"><button type=\"button\" class=\"btn btn-info btn-sm\" onclick=\"showColumns('" + entry['id'] + "')\" >Get Key Results</button></td> </tr>";
                        j++;
                    }
                    
                }                
              
            }
            tableElement += tableEntry + "</tbody> </table>";
            $("#search-results").html(tableElement);
        },
        error: function(jqXHR, textstatus, message) {


        }
    }
    )
}