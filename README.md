# Adding a New Group of Conversions

To add a new group of conversions, follow these steps. This guide assumes you're adding a new group named `content`.

### In Google Analytics 4 (GA4):
1. Go to your GA4 account property.
2. Navigate to Admin (bottom left, looks like a gear icon).
3. Under `Data Display`, select `Events`.
4. Enable `Mark as Event` for the group event, which will look like `ds_{group}_form_submit`. It may take up to 72 hours to appear for the first time.

   **Example:** For the group `'content'`, the event will be `ds_content_form_submit`.

5. Go to `Data Display` -> `Custom Definitions`.
6. Click on `Custom Metrics` -> `Create Custom Metric`.
7. Fill in the fields as explained below and save them.

   ***Note:*** Like for above Step 4 we use 'Content' so `{group_name}` will be 'content', you can take examples of previously created metrics.

   - **Metric Name:** `{group_name}` Form Submission Conversion
   - **Description:** This metric aggregates the count for the `{group_name}` forms submission conversion event.
   - **Parameter Name:** ds_count_`{group_name}`_form_submit
   - **Unit of Measurement:** Standard

### In Looker Studio:
1. Go to the report of the property for which the new group is added and click on `Edit`.
2. In the top options, find `Resources` -> `Manage Filters`, and click `Edit` for the filter named `is Conversion Event list`.
3. Add the `Parameter Name` you added in GA4 Step 7 in front of the Event name, separated by a comma (,).

---

# Adding a New Content Group

To add a new Content Group, follow these steps. This guide assumes you're adding a new group named `content`.

***Note:*** Content Group does not require any settings for data collection, but it does require an update in Looker Studio to create separate charts for visual data. The steps below can't help design a report but will assist in creating charts for ease.

### In Looker Studio:

#### Adding a Filter for Separate Data for the New Content Group:
1. Go to the report of the property for which the new group is added and click on `Edit`.
2. In the top options, find `Resources` -> `Manage Filters`, `Duplicate` any filter name that ends with `Content Group`, you will see a filter with the name `Copy of...Content Group`, Edit it.
3. Change the Name, and in the last field, replace the new group name, like if there is `sub-pillar`, replace it with `content`.
4. Don't forget to click Save at the bottom right.

#### Adding and Setting Charts:
1. On the Last Page of the Report, You will find 2 Charts on `Row 2`. Click on them and use the key to copy **`ctrl` + `C`** or **`command` + `C`**. and then for paste use **`ctrl` + `V`** or **`command` + `V`**, or You can `right-click` over the Chart and select `Duplicate`.
2. Select the New Chart, on the right side options will come for `Setup` and `Style`. Go to `Setup`.
3. Below Setup, Nearly at the bottom, You will find filters, `Remove` the previous filter, if any, and click on `Add A Filter` and `select` the filter name, which you have created before.
4. Now you can go back from this setting or directly click on `View` at the top right. You can see changes. You have to design the page here to customize the report here.

