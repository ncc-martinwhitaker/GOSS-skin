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

        // Update button values using specific IDs
        const tasksBtn = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_TABTASKSBTN");
        if (tasksBtn) {
            tasksBtn.value = "Emails";
        }
        
        const emailsBtn = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_TABEMAILLOGBTN");
        if (emailsBtn) {
            emailsBtn.value = "Contacts";
        }

        // Update 'Add new task' button text
        const createNewTaskBtn = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CREATENEWTASKBTN");
        if (createNewTaskBtn && createNewTaskBtn.value === "Add new task") {
            createNewTaskBtn.value = "Add new email";
        }

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

    updateForm(); // Execute update on page load
});

// Hide "Contact" button only within the Emails tab
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".icminput--button");
    const emailButton = document.getElementById("CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_TABTASKSBTN");

    // Add the emailactive class to the body on page load if the button has the value ‘Emails’
    if (emailButton && emailButton.value === "Emails") {
        document.body.classList.add("emailactive");
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.id === "CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_TABTASKSBTN" && this.value === "Emails") {
                document.body.classList.add("emailactive");
            } else {
                document.body.classList.remove("emailactive");
            }
        });
    });
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