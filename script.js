
    var errormessage = "";
    var missingfeild = "";

    // ✅ Email Validation Function
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $("#phoneno ").on("input", function () {
    // Remove non-digit characters
    let digits = $(this).val().replace(/\D/g, "");

    // Limit to 10 digits only
    if (digits.length > 10) {
      digits = digits.slice(0, 10);
    }

    $(this).val(digits);
    });


    // ✅ Password Strength Validation
    function isStrongPassword(password) {
        // At least 8 characters, one uppercase, one lowercase, one digit
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    }

    // ✅ Show/Hide Password Toggle
    $(document).ready(function () {
        $("#togglePassword").click(function () {
            var type = $("#password").attr("type") === "password" ? "text" : "password";
            $("#password").attr("type", type);
            $("#togglePassword").text(type === "password" ? "Show" : "Hide");
        });
        
        // ✅ Toggle confirm password show/hide
     $("#toggleConfirmPassword").click(function () {
        const type = $("#confirmpassword").attr("type") === "password" ? "text" : "password";
        $("#confirmpassword").attr("type", type);
        $(this).text(type === "password" ? "Show" : "Hide");
      });


        $("#submitbutton").click(function () {
            errormessage = "";
            missingfeild = "";

            var email = $("#Email").val().trim();
            var phone = $("#phoneno").val().trim();
            var password = $("#password").val();
            var confirmPassword = $("#confirmpassword").val();

            // ✅ Check Empty Fields
            if (email === "") {
                missingfeild += "<p>Email not filled</p>";
            }

            if (phone === "") {
                missingfeild += "<p>Phone number not filled</p>";
            }

            if (password === "") {
                missingfeild += "<p>Password not filled</p>";
            }

            // ✅ Email Format Validation
            if (email !== "" && !isEmail(email)) {
                errormessage += "<p>Email is not valid</p>";
            }

            // ✅ Phone Number Validation (Only digits & exactly 10)
            if (!/^\d{10}$/.test(phone)) {
                errormessage += "<p>Phone number must be exactly 10 digits</p>";
            }

            // ✅ Password Strength Validation
            if (password !== "" && !isStrongPassword(password)) {
                errormessage += "<p>Password must be at least 8 characters long and include uppercase, lowercase, and a number</p>";
            }

            // ✅ Password Match Check
            if (password !== confirmPassword) {
                errormessage += "<p>Passwords do not match</p>";
            }

            // ✅ Final Result
            if (errormessage === "" && missingfeild === "") {
                $("#success").html("✅ You are successfully registered");
                $("#errors").html("");
            } else {
                $("#errors").html(errormessage + missingfeild);
                $("#success").html("");
            }
        });
    });

