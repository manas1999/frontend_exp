var searchResponse = null

function temp(){
    var input;
    input = document.getElementById('inputPassword2').value;
    console.log(input);

    $.ajax({
        url: "https://okrcentral.github.io/sample-okrs/db.json",
        type: "GET",
        // dataType: "json",
        success: function(response) {
            searchResponse = response
            var tables = searchResponse.payload
            
            var tableElement = "<table class=\"table table-hover\"> <thead> <tr> <th scope=\"col\">#</th> <th scope=\"col\">Schema</th> <th scope=\"col\">Table Name</th> <th scope=\"col\">Documentation</th> <th scope=\"colspan=\"1\" \">Action</th> </tr> </thead> <tbody>"
            var tableEntry = ""
            for(var i = 1; i <= tables.length; i++){
              var table =  tables[i-1]
              tableEntry += "<tr> <th scope=\"row\">"+i+" </th> <td> "+ table.schemaName +"</td> <td>"+table.tableName+"</td> <td>NA</td> <td scope=\"col\"><button type=\"button\" class=\"btn btn-info btn-sm\" onclick=\"showColumns('" + table.tableName + "')\" >Get Details</button></td> </tr>"
            }

            tableElement += tableEntry + "</tbody> </table>"
            $("#search-results").html(tableElement);

        },
        error: function(jqXHR, textstatus, message) {


        }
    }
    )
}


function showColumns(tableName) {
    var tables = searchResponse.payload
    for(var i = 0; i < tables.length; i++){
      var table =  tables[i]
      if(table.tableName == tableName){
        console.log(table);
        var columnElement = "<table class=\"table table-hover\"> <thead> <tr> <th scope=\"col\">#</th> <th scope=\"col\">Column Name</th> <th scope=\"col\">Data Type</th> </tr> </thead> <tbody>"
        var columnEntry = "";
        for(var j = 1; j <= table.columns.length; j++){
          var column = table.columns[j-1]
          console.log(column);
          columnEntry += "<tr> <th scope=\"row\">"+j+" </th> <td> "+ column.columnName +"</td> <td>"+column.dataType+"</td </tr>"
        }
        columnElement += columnEntry + "</tbody> </table>"

        console.log(columnElement);

        $("#table-details-modal").find(".modal-body").html(columnElement);
        $("#table-details-modal").find(".modal-title").text(tableName);
        $("#table-details-modal").modal('toggle');
        break;
      }
  }
}

/*
function fun(){
    var input,temp;
    input = document.getElementById('inputPassword2').value;
    console.log(input);

    $.ajax({
        url: "https://devapi.bidgely.com/bidgely-catalogue/search?schemaname=spectrum&searchtext="+input+"&access_token=786c9a9c-9e4e-4a46-96e9-a84855fadbea",
        type: "GET",
        // dataType: "json",
        success: function(response) {
            searchResponse = response

            // console.log(searchResponse);
            // var searchResponseJson = JSON.parse(searchResponse);
            var tables = searchResponse.payload
            
            var tableElement = "<table class=\"table table-hover\"> <thead> <tr> <th scope=\"col\">#</th> <th scope=\"col\">Schema</th> <th scope=\"col\">Table Name</th> <th scope=\"col\">Documentation</th> <th scope=\"colspan=\"1\" \">Action</th> </tr> </thead> <tbody>"
            var tableEntry = ""
            for(var i = 1; i <= tables.length; i++){
              var table =  tables[i-1]
              tableEntry += "<tr> <th scope=\"row\">"+i+" </th> <td> "+ table.schemaName +"</td> <td>"+table.tableName+"</td> <td>NA</td> <td scope=\"col\"><button type=\"button\" class=\"btn btn-info btn-sm\" onclick=\"showColumns('" + table.tableName + "')\" >Get Details</button></td> </tr>"
            }

            tableElement += tableEntry + "</tbody> </table>"
            $("#search-results").html(tableElement);




//             <table class="table table-hover">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>

            // const elem = document.createElement('dev');
            // const table1 = document.createElement('table');
            // table1.setAttribute('class',"table table-hover");
            // const thead = document.createElement('thead');
            // const tr1 = document.createElement('tr');
            // const th1 = document.createElement('th');
            // th1.setAttribute("scope","col");
            // const text1 = document.createTextNode('#');
            // th1.appendChild(text1);
            // const th2 = document.createElement('th');
            // th2.setAttribute("scope","col");
            // const text2 = document.createTextNode("SchemaName");
            // th2.appendChild(text2);
            // const th3 = document.createElement('th');
            // th3.setAttribute("scope","col");
            // const text3 = document.createTextNode("TableName");
            // th3.appendChild(text3);
            // const th4 = document.createElement('th');
            // th4.setAttribute("scope","col");
            // const text4 = document.createTextNode("Button");
            // th4.appendChild(text4);
            // tr1.appendChild(th1);
            // tr1.appendChild(th2);
            // tr1.appendChild(th3);
            // tr1.appendChild(th4);
            // thead.appendChild(tr1);
            // table1.appendChild(thead);
            // const tbody1 = document.createElement('tbody');
            // var i  = 1;
            // for(var key in response['payload']){
            //     const tr2 = document.createElement("tr");
            //     const th1 = document.createElement("th");
            //     th1.setAttribute("scope","row");
            //     const text5 = document.createTextNode(i);
            //     th1.appendChild(text5);
            //     tr2.appendChild(th1);
            //     const td1 = document.createElement('td');
            //     const td2 = document.createElement('td');
            //     const text6 = document.createTextNode(response['payload'][key]['schemaName']);
            //     const text7 = document.createTextNode(response['payload'][key]['tableName']);
            //     td1.appendChild(text6);
            //     td2.appendChild(text7);
            //     const but = document.createElement('button');
            //     but.setAttribute('id',key);
            //     but.setAttribute('class','button2');
            //     but.setAttribute('onclick','fun2(this.id);');
            //     const text8 = document.createTextNode("Get Schema");
            //     but.appendChild(text8);
            //     tr2.appendChild(td1);
            //     tr2.appendChild(td2);
            //     tr2.appendChild(but);
            //     tbody1.appendChild(tr2);
            //     console.log(response['payload'][key]['tableName']);
            //     i = i+1;
            //
            // }
            // table1.appendChild(tbody1);
            // elem.appendChild(table1);
            // //document.body.appendChild(elem);
            // const myNode = document.getElementById('wrapper');
            // myNode.innerHTML = '';
            // //document.getElementById('wrapper').replaceChild(elem,menue.lastElementChild);
            // document.getElementById('wrapper').appendChild(elem);
        },
        error: function(jqXHR, textstatus, message) {


        }
    }
    )

}

*/
function fun2(e){
    var input,temp;
    input = document.getElementById('inputPassword2').value;
    console.log(input);



    $.ajax({
        url: "https://devapi.bidgely.com/bidgely-catalogue/search?schemaname=spectrum&searchtext="+input+"&access_token=786c9a9c-9e4e-4a46-96e9-a84855fadbea",
        type: "GET",
        // dataType: "json",
        success: function(response) {
            const elem = document.createElement('dev');
            const a = document.createElement('a');
            a.setAttribute('href','#');
            a.setAttribute('class','button');
            const text0 = document.createTextNode("Close");
            a.appendChild(text0);
            a.setAttribute('onclick','button123();');
            elem.appendChild(a);
            const table1 = document.createElement('table');
            table1.setAttribute('class',"table table-hover");
            const thead = document.createElement('thead');
            const tr1 = document.createElement('tr');
            const th1 = document.createElement('th');
            th1.setAttribute("scope","col");
            const text1 = document.createTextNode('#');
            th1.appendChild(text1);
            const th2 = document.createElement('th');
            th2.setAttribute("scope","col");
            const text2 = document.createTextNode("column");
            th2.appendChild(text2);
            const th3 = document.createElement('th');
            th3.setAttribute("scope","col");
            const text3 = document.createTextNode("type");
            th3.appendChild(text3);
            tr1.appendChild(th1);
            tr1.appendChild(th2);
            tr1.appendChild(th3);
            thead.appendChild(tr1);
            table1.appendChild(thead);
            const tbody1 = document.createElement('tbody');
            var i = 1;
            for(var key in response['payload'][e]){
                const tr2 = document.createElement("tr");
                const th1 = document.createElement("th");
                th1.setAttribute("scope","row");
                const text5 = document.createTextNode(i);
                th1.appendChild(text5);
                tr2.appendChild(th1);
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const text6 = document.createTextNode(key);
                //const text6 = document.createTextNode(response['payload'][e][key][0]);
                const text7 = document.createTextNode(response['payload'][e][key]);
                td1.appendChild(text6);
                td2.appendChild(text7);
                tr2.appendChild(td1);
                tr2.appendChild(td2);
                tbody1.appendChild(tr2);
               // console.log(response['payload'][key]['tableName']);
               i=i+1;


            }
            table1.appendChild(tbody1);
            elem.appendChild(table1);
            //document.body.appendChild(elem);
            const myNode = document.getElementById('popup-content');
            myNode.innerHTML = '';
            //document.getElementById('wrapper').replaceChild(elem,menue.lastElementChild);
            document.getElementById('popup-content').appendChild(elem);
            document.querySelector(".popup").style.display = "flex";
        },
        error: function(jqXHR, textstatus, message) {


        }
    }
    )
}

function button123(){

    document.querySelector(".popup").style.display = "none";
}

