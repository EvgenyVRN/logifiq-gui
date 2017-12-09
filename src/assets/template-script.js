
    var clicky;

    $(document).mousedown(function(e){
        clicky = $(e.target);
    });

    $(document).mouseup(function(e){
        clicky = null;
    });

    var ww = $(window).width();
    $(window).resize(function(){
        if (ww < 800){
            $(body).removeClass('left-side-collapsed');
        }

    });

    $("#btn-registry").on("click", function(e){
        var  registry = $("#registryDropdown");
        registry.css("display", "grid");
    });

    $(document).on("click", function(e){
        if($(e.target).get(0).id != 'registryDropdown' && $(e.target).get(0).id != 'btn-registry'
                && $(e.target).parents("#btn-registry").length == 0 && $(e.target).parents("#registryDropdown").length==0){
            $("#registryDropdown").css("display", "none");
        }
    });

    $(document).on("keypress","input.numeric", function(e){
        var v = $(this).val();
        if (!((e.key >= 0 && e.key <= 9) || e.key === '.' || e.key == ',')){
            return false;
        }
        if ((e.key === '.' || e.key === ',') && (v.includes('.') || v.includes(','))){
            return false;
        }
        v = v.replace(",", ".");
        $(this).val(v);
        var comIndex = v.indexOf(".");
        return !(comIndex >= 0 && v.substring(comIndex).length > 3);

    });

    $(document).on("change","input.numeric", function(e){
        var v = $(this).val();
        if (v.substring(0,1) === '.' || v.substring(0,1) === ','){
            v = 0 + v;
        }
        $(this).val(v);
    });

    $(document).on("click", ".oper-filters-arrivals input", function(e){
        $(this).parents("th.oper-filters-arrivals").find("select.operator").show();
    });

    $(document).on("blur", ".oper-filters-arrivals input", function(e){
        var op = $(this).parents("th.oper-filters-arrivals").find("select.operator");
        if (clicky[0] != op[0] && ($(this).val() === '')){
            op.hide();
        }
    });

    $(document).on("blur", "select.operator", function(e){
        var op = $(this).parents("th.oper-filters-arrivals").find("input");
        if (clicky[0] != op[0] && (op.val() === '')){
            $(this).hide();
        }
    });



    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })



    window.onload = function(){
        document.getElementById('one_field').onclick = function(){
            var two = document.getElementById('two_fields');
            var one = document.getElementById('one_field');
            two.style.display = (two.style.display == '') ? 'block' : '';
            one.style.display = (one.style.display == 'none') ? 'block' : 'none';
            return false;
        };
    };

