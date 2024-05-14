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
   ```***Note:*** Like for above Step 4 we use 'Content' so `{group_name}` will be 'Content', you can take example of previously created metrics.```

   **Metric Name:** `{group_name}` Form Submission Conversion
   **Description:** This metric aggregates the count for the `{group_name}` forms submission conversion event.
   **Parameter Name:** ds_count_`{group_name}`_form_submit
   **Unit of Measurement:** Standard

### In Looker Studio:
1. Go to the report of the property for which the new group is added and click on `Edit`.
2. In the top options, find `Resources` -> `Manage Filters`, and click `Edit` for the filter named `is Conversion Event list`.
3. Add the `Parameter Name` you added in GA4 Step 7 in front of the Event name, separated by a comma (,).

