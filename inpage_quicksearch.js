$(document).ready(function () {

    //Apply table headings as the data-title attribute for all the table cells
    var header = Array();
    $(".LookupTable table thead th").each(function (i, v) {
        header[i] = $(this).text();
    });
    $(".LookupTable table tbody tr").each(function (i, v) {
        var myRow = $(this);
        myRow.find("td").each(function (j) {
            $(this).attr('data-title', header[j+1]);
        });

    });

    //Lookup component
    var LookupColumnSearch = "*";
    if ($('#LookupColumnSearch').text().length) {
        var strFind = $('#LookupColumnSearch').text();
        var arrFind = strFind.replace(" ", "");
        arrFind = arrFind.split(",");
        LookupColumnSearch = "";
        for (var i = 0; i < arrFind.length; i++) {
            if (arrFind[i] === "1") LookupColumnSearch += "th:nth-child(" + arrFind[i] + "), ";
            LookupColumnSearch += "td:nth-child(" + arrFind[i] + "), ";
        }
        if (LookupColumnSearch.slice(-2) === ", ") LookupColumnSearch = LookupColumnSearch.slice(0, -2);
        
    }
    $("#quicksearch").keyup(function () {
        var value = this.value.toLowerCase().trim();
        //$("tr").unmark();
        $("table tr").each(function (index) {
            if (!index) return;
            $(this).find(LookupColumnSearch).each(function () {
                var id = $(this).text().toLowerCase().trim();
                var not_found = (id.indexOf(value) == -1);
                $(this).closest('tr').toggle(!not_found);
                return not_found;
            });
        });
        var counttr = $('tr').filter(function () {
            return $(this).css('display') !== 'none';
        }).length;
        if (counttr == '1') { $('body').addClass('noresults'); } else {
            $('body').removeClass('noresults');
        }
        //$("tr").mark(value);
    });
});