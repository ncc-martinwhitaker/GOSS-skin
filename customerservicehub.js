$(document).ready(function() {
    /* 3454 */
    $("#CASEMANAGEMENTCLOSECASEV1EN_CLOSECASEBTN").attr("aria-describedby", "close-button-details");
    $("#CASEMANAGEMENTCLOSECASEV1EN_CASECOMPLETIONTARGETBUTTONS_OUTER").prepend("<div class='warning' id='close-button-details'>Important: once a case is closed it cannot be edited or reopened.</div>");
});


/*===================================================
5209 Hide Close Case button in CSH for 6 casetypes
===================================================*/
document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.querySelector("#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CASETYPE");
  const subtypeElement = document.querySelector("#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_SUBTYPEVALUE");
  const closeButton = document.querySelector("#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CLOSECASEBTN");

  const validValues = [
      "adviceandguidance",
      "databreach",
      "freedomofinformation",
      "informationshare",
      "policerequest",
      "subjectaccessrequest",
      "clienthardshiprequest", // 5354 CHS case management - Prevent case closure
      "hwapplications" // 5503 Highways case management - Hide close case button
  ];

  const additionalSubtypeValues = ["skiplicence", "electricvehiclecharging", "scaffoldsandhoarding"];

  function toggleButtonVisibility() {
      const isHwApplications = selectElement.value === "hwapplications";
      const isSubtypeValid = subtypeElement && additionalSubtypeValues.includes(subtypeElement.value);

      if (validValues.includes(selectElement.value) || isHwApplications && isSubtypeValid) {
          closeButton.style.display = "none"; // hide button
      } else {
          closeButton.style.display = ""; // show button
      }
  }

  // Run a check when the main select value changes
  selectElement.addEventListener("change", toggleButtonVisibility);

  // Run a check when the subtype select value changes (if it exists)
  if (subtypeElement) {
      subtypeElement.addEventListener("change", toggleButtonVisibility);
  }

  // Initial inspection
  toggleButtonVisibility();
});


/*==================================================================================
5632 CHS case management - CSS changes to rename tabs, rename and hide buttons AND
==================================================================================*/
document.addEventListener("DOMContentLoaded", function () {
    function updateForm() {
        const form = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CASETYPE");
        if (!form || form.value !== "clienthardshiprequest") return;

        // Update 'Add new task' button text
        const createNewTaskBtn = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CREATENEWTASKBTN");
        if (createNewTaskBtn && createNewTaskBtn.value === "Add new task") {
            createNewTaskBtn.value = "Add new email";
        }
    }

    updateForm(); // Execute update on page load
});

//Linked cases
document.addEventListener("DOMContentLoaded", function () { 
    // Get the heading element
    const heading = document.querySelector(".a-heading__title.a-heading__title--icon");

    // Check if the heading exists and has the required text
    if (!heading || heading.textContent.trim() !== "Client Hardship requests work tray") return;

    // Update button values based on their IDs
    const tasksBtn = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_LINKS_TABTASKSBTN2");
    if (tasksBtn && tasksBtn.value === "Tasks") {
        tasksBtn.value = "Emails";
    }

    const emailsBtn = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_LINKS_TABEMAILLOGBTN2");
    if (emailsBtn && emailsBtn.value === "Emails") {
        emailsBtn.value = "Contacts";
    }

    // Handle active button state
    const buttons = document.querySelectorAll(".icminput--button");
    const emailButton = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_LINKS_TABTASKSBTN2");
    const linkedCasesButton = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_LINKS_TABLINKEDCASESBTN2");

    // Add "emailactive" class if any button is already selected on page load
    if (emailButton?.classList.contains("icminput--contrast") || linkedCasesButton?.classList.contains("icminput--contrast")) {
        document.body.classList.add("emailactive");
    }

    // Add event listeners to buttons to toggle "emailactive" class
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.id === "CASEMANAGEMENTCASEDETAILSV1EN_LINKS_TABTASKSBTN2" || this.id === "CASEMANAGEMENTCASEDETAILSV1EN_LINKS_TABLINKEDCASESBTN2") {
                document.body.classList.add("emailactive");
            } else {
                document.body.classList.remove("emailactive");
            }
        });
    });
});

// 5643 CHS case management - CSS changes to rename tabs, rename and hide buttons (Enquiry view)
function updateButtonLabels() {
    document.querySelectorAll('form').forEach(form => {
        let hiddenInputs = [
            form.querySelector('input[type="hidden"]#CASEMANAGEMENTCASEENQUIRYVIEWV1EN_DETAILS_CASETYPE'),
            form.querySelector('input[type="hidden"]#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CASETYPE')
        ];

        if (hiddenInputs.some(input => input && input.value === "clienthardshiprequest")) {
            let tasksButtons = [
                form.querySelector('input[type="button"]#CASEMANAGEMENTCASEENQUIRYVIEWV1EN_DETAILS_TABTASKSBTN'),
                form.querySelector('input[type="button"]#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_TABTASKSBTN')
            ];
            
            let emailsButtons = [
                form.querySelector('input[type="button"]#CASEMANAGEMENTCASEENQUIRYVIEWV1EN_DETAILS_TABEMAILLOGBTN'),
                form.querySelector('input[type="button"]#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_TABEMAILLOGBTN')
            ];

            tasksButtons.forEach(button => { if (button) button.value = "Emails"; });
            emailsButtons.forEach(button => { if (button) button.value = "Contacts"; });
        }
    });

    // Update styles for all required tab content sections
    const tabIds = ["cm-tab-content-details", "cm-tab-content-tasks", "cm-tab-content-history", "cm-tab-content-attachments", "cm-tab-content-emails", "cm-tab-content-additional"];
    tabIds.forEach(id => {
        const tab = document.getElementById(id);
        if (tab) {
            tab.style.fontSize = "18px";
            tab.style.fontWeight = "bold";
        }
    });
}

document.addEventListener("DOMContentLoaded", updateButtonLabels);

//Hide Contact button in Emails 
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('input[type="button"]');
    const emailButton = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_TABTASKSBTN");
    const linkedCasesButton = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_LINKS_TABLINKEDCASESBTN2");
 
    // Check if either button is already selected on page load
    if (emailButton?.classList.contains("icminput--contrast") || linkedCasesButton?.classList.contains("icminput--contrast")) {
        console.log("Page Load: One of the input buttons has 'icminput--contrast', adding 'emailactive' to body.");
        document.body.classList.add("emailactive");
    } else {
        console.log("Page Load: No input buttons have 'icminput--contrast'.");
    }
 
    // Add event listener to each input button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log(`Input Button Clicked: ${this.id}`);
 
            if (this.id === "CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_TABTASKSBTN" || 
                this.id === "CASEMANAGEMENTCASEDETAILSV1EN_LINKS_TABLINKEDCASESBTN2") {
                console.log(`Input Button Clicked: ${this.id} - Adding 'emailactive' to body.`);
                document.body.classList.add("emailactive");
            } else {
                console.log(`Input Button Clicked: ${this.id} - Removing 'emailactive' from body.`);
                document.body.classList.remove("emailactive");
            }
        });
    });
});