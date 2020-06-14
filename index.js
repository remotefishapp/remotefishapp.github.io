

$(document).ready(function() {
    var tr;
    console.log(data)
    console.log(data.length)
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        console.log(data[i].company)
        tr.append('<td><a href="' + data[i].origin + '">' + data[i].company + '<a></td>');
        tr.append('<td><a href="' + data[i].job_detail_url + '">' +  data[i].job_title + '</a></td>');
        $('table').append(tr);
        console.log()
    }
});
