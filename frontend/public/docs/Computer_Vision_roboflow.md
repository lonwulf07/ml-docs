# Roboflow Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.roboflow.com/](https://docs.roboflow.com/)



---

## Source: https://docs.roboflow.com/

Find the resources you need to build your computer vision application.


Deployments

Run models in the cloud or on your own hardware.

Workflows

Run multi-stage vision workflows anywhere.

Models

Train state of the art models with a few clicks.

Datasets

Upload, manage, annotate, and analyze images.

Workspaces

Invite, remove, and manage users in your workspace.

Developer Reference

Learn about the Roboflow CLI and Python SDK.

Community Forum

Browse questions from the community and ask your own.

Contact Support

Use live chat in our product or contact your account representative (paid accounts only).

Weekly Live Sessions

Join Roboflow team members and users from the community for a live session to learn about new features or ask questions.

Last updated 2 months ago

Was this helpful?

---

## Source: https://docs.roboflow.com/developer

With these developer tools, you can upload and download data, manage your projects, and more.

The features available vary between developer tool. You can see a full list of features supported with each tool in the sidebar of this section of the documentation.

---

## Source: https://docs.roboflow.com/changelog

This month we launched the following new features:

Audit Logs for Workspace Activity

AWS S3 Sink Block in Workflows

Continuous Improvement in Roboflow Rapid

Credit Usage Tracking by Folder

Qwen3.5-VL in Workflows

Updated Workflows AI Assistant

Stream Sharpness Monitoring

Trigger-Based Inference in Deployment Manager

YOLOLite Available in Train (Beta)


Last updated 8 days ago

Was this helpful?

---

## Source: https://docs.roboflow.com/workspaces/key-concepts

# Workspaces, Projects, and Models

Learn how Workspaces, Projects, Versions, and Models structure your computer vision work in Roboflow

Everything in Roboflow follows this structure:

Workspace → Projects → Dataset Versions → Models

A [Workspace](/workspaces/roboflow-workspaces) is the top-level container.

It's where you and your team collaborate.

All Projects live inside a Workspace


Think of it like a company folder that holds all your computer vision work.

A [Project](/datasets/create-a-project) lives inside a Workspace. Each Project is built around a computer vision dataset. This is where you manage:

Dataset updates over time


When you create a Project, you have to choose the Project type - one of the computer vision task type:

This determines how your data is structured and which model architectures you can train.

**Dataset Versions**

A [Dataset Version](/datasets/dataset-versions) is a snapshot of your dataset at a specific moment in time.

You create a Version from the current state of your Project

Once created, it does not change

Any future edits to images or annotations will not affect existing Versions


Which ensures reproducibility, clear tracking, and helps with model comparison.

[Models](/train/train) are trained using Dataset Versions.

You select a specific Dataset Version which will be used to train a model

That model is permanently linked to that version

Available model architectures for training will depend on your Project type


You can also [upload trained models to Roboflow](/deploy/upload-custom-weights).

---

## Source: https://docs.roboflow.com/workspaces/roboflow-workspaces

# Create a Workspace

Create a workspace to organize your projects and collaborate with your team.

All computer vision projects in Roboflow belong to a workspace. Creating a new workspace allows you to invite a separate group of teammates to collaborate on projects, and every workspace is billed separately with its own resources and API keys.

### Create a New Workspace

After log in, to create a new Workspace, click on the name of your workspace in the left side panel. Then, click the "+" icon:

### Workspace Setup

When you create a new Workspace, you need to choose a plan for the Workspace. To learn more about the available plans you can check out our [Pricing](https://roboflow.com/pricing) page.

The selected Workspace Name will also become part of the `workspace ID`


Enter emails, comma-separated, for individuals to receive workspace invitations with specified roles (`Admin`

or `Labeler`

roles)

Select

`Back`

to change the Workspace Name or Usage TypeSelect

`Skip`

to skip team invitations.

**Renaming Workspaces**

**Renaming Workspaces**

Click the pencil-shaped icon next to the workspace name on the main landing page for the workspace.

Enter the new workspace name and click "Save"

**Note:**** Renaming a workspace will update the workspace ID.**

**Workspace Settings**

**Workspace Settings**

Select `Settings`

in the left sidebar to open the Workspace Settings menu.

**Plan and Billing**- View your current workspace plan, how to add Billing Info, and more workspace upgrade options**Usage**- Workspace Features and Usage (all-time and by month)Team Members, Projects, Source Images, Generated Images, Inference Usage (view and download charts)


**Members**- View workspace members, member roles, status of workspace invitations**Roboflow API**- View, copy and revoke Public and Private API Keys**Third Party Keys**- Integrations with Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platforms (GCP) and OpenAI**Rename Workspace**- Give the workspace a new name. This will update the`workspace ID`

**Delete Workspace**- This action is irreversible after confirming deletion. Proceed with caution.**Transfer of Ownership**- It is not possible to transfer the creator role. The creator role is a signatory role that is equivalent to an admin but cannot be removed. To have a new designated admin, have the creator of the workspace promote a user to admin or keep the creator email active.

### Deleting a Workspace

Once you are finished with your projects in Roboflow, you may delete your workspace. Deleting a workspace is a permanent action. To delete your workspace, click on the workspace settings menu and click **Delete Workspace**. As shown below, you will be required to confirm this action - deletion **cannot be reversed**.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workspaces/rename-a-workspace

# Rename a Workspace

You can rename a Workspace from your Workspace Settings.

Renaming your Workspace will change your Workspace URL. This means that you will need to update all Workflow endpoints or Workspace references in your API or Inference scripts. If you rename a Workspace, any future script that calls a Workflow using your old Workspace URL will not work. You will need to update your scripts to use your new Workspace ID.

To rename a Workspace, click Settings in the Roboflow sidebar, then click "Plan & Billing":

Then, click the "Rename Workspace" button in the top right corner of the page:

You can then set a new name for your Workspace:

When you click "Rename Workspace", your Workspace will be immediately renamed. This action is irrevocable.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workspaces/asset-library

# Asset Library

Asset Library allows users to find and manage images across an entire Workspace in one place.

### Finding images

Asset Library features a powerful searching capabilities that combine:

Semantic search, so you can describe an image, eg.

`boxes`

and it will return all images of boxes[Similarity search](/annotate/use-roboflow-annotate/similarity-search-and-settings), to find similar images, eg.`like-image:61JNhXnwbNqNxux5Acnk`

[Traditional Dataset filtering](/datasets/manage-datasets/dataset-search), eg.`class:helmet AND NOT (tag:v1 OR tag:v2)`

[Metadata search](/datasets/adding-data/image-metadata#searching-by-metadata), eg.`metadata:author=John`


### Managing images

After you find images based on your search settings, you can select them (manually or select all), and:

Add tags to selected images, so you can later find them easier (search by tag)

Create a New Project with selected images

Add selected images to an Existing Project


Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workspaces/team-members

# Team Members

Understand how team members interact in a workspace.

Computer vision is better when you work together as a team!

Every plan allows your team to work together to label, train, and deploy models. Team members can always be managed from your [Workspace Settings](https://app.roboflow.com/settings/members) and they can be internal to your company or external partners that you work with.

Each team member is assigned a role according to the level of access that they need to have. The role that a team member can be assigned varies according to [Role Based Access Control](/workspaces/team-members/role-based-access-control).

As a user of Roboflow, you can be a team member of an unlimited number of workspaces. However, each workspace does have a limit to the number of team members that can have access at the same time.

The number of team member seats your workspace has available is dependent on the plan you have chosen.

For up-to-date information on our plans and their associated features, see our [pricing page](https://roboflow.com/pricing).

### Get Started

To get started with Team Members, learn how to:

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workspaces/single-sign-on-sso

SSO is available for Roboflow Enterprise customers.

Single Sign On (SSO) is a premium feature, only available for Enterprise.

For up-to-date information on our plans and their associated features, see our pricing page.

Enterprise customers can request Single Sign On authentication.

This is useful if you have enterprise authentication requirements around using software with SSO.

To learn more about Single Sign On, contact the Roboflow sales teamarrow-up-right or your account representative.

Last updated 4 months ago

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/what-is-workflows

Roboflow Workflows let you create a multi-step computer vision application in your browser. You can then deploy the application you build to your own hardware.

You can deploy a Workflow on the Roboflow Cloud or self-host on your own hardware and edge devices. The same workflow can be run on images, video files, and live RTSP streams using our Roboflow Inference package.

In this section of the documentation, we walk through how to create, build, test, and deploy a Workflow.

Prefer to learn with video? We have a full tutorial that walks through how to build your first Workflow:

---

## Source: https://docs.roboflow.com/workflows/create-a-workflow

# Create a Workflow

### Create a Workflow

To create a Workflow, navigate to your workspace dashboard and click the "Workflows" tab:

On the Workflows page, click "Create a Workflow" to create a workflow:

You will be redirected to your new Workflow in the Roboflow web application:

You can optionally start with a template that let you do, among other things:

Run a single model, count detected objects, and visualize results.

Run a detection model, crop results, and then run an OCR model for text recognition.

Detect an object then classify the region of the detection.


Select "Start from a Template" to browse our popular workflow templates.

Now that you have created a workflow, let's configure it to solve a vision use case.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/build-a-workflow

# Build a Workflow

A workflow is made up of blocks, which perform specific tasks, such running model inference, performing logic, or interfacing with external services.

For a deeper dive on the list of available block, view our [block documentation](https://inference.roboflow.com/workflows/blocks/).

### Overview

This guide will go over creating a four block workflow to run an object detection model, count predictions, and visualize the model results. Here’s the [final workflow template](https://app.roboflow.com/workflows/embed/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3JrZmxvd0lkIjoiMmdqakJxMDV3Q01ac1hHM3hkeFAiLCJ3b3Jrc3BhY2VJZCI6ImtyT1RBYm5jRmhvUU1DZExPbGU0IiwidXNlcklkIjoiSW1GTElaU2tHYk55OXpiNFV1cWxNelBScHBRMiIsImlhdCI6MTczODE4ODk5MH0.f72WI5bdjtnwC8iqXF_XiUVarfOktIAH1egpsI0Oh4Q) to follow along.

### Block Connections

Before we start building, it's important to understand how block connections work.

To add a block in a location, it has to use the previous block as an input. For example, in the workflow shown above, the *Property Definition* block comes after the *Object Detection* block since it uses the model block as an input. The *Bounding Box Visualization* block is to the right, since it doesn't use the output of the *Property Definition* block, but does reference the model output.

In the example workflow above, we have four distinct pathways, since each branch executes in parallel at runtime, and doesn't rely on the other branch blocks as inputs.

### Building a Workflow

#### Object Detection Model

First, add an *Object Detection Model* block. You can choose between a public pre-trained model, such as YOLOv8n trained on [COCO](https://universe.roboflow.com/microsoft/coco), or a fine-tuned model in your workspace. I’ll go ahead with the pre-trained *yolov8n* model to detect people and vehicles.

The object detection block has a required image parameter that determines what the model is inferring on. There are several optional parameters, the core ones are described in detail below:

Class Filter: List of classes that the model will return. Note: the model will always only return classes it’s trained on, this allows you to filter out unneeded classes.

Confidence: objects below that confidence will not be returned.

IoU threshold: a higher threshold will return more overlapping predictions. 0.9 means that objects with 90% or less overlap will be returned, while 0.1 means objects with more than 10% overlap will not be included.

Max Detections: the maximum number of objects the model will return

Class Agnostic NMS: whether overlap filtering should compare and exclude objects with just the same class, or all classes


#### Property Definition

The property definition block allows you to extract relevant information from your data, such as the image size, predicted classes, or number of detected objects. For this example, we’ll be counting the number of objects found by the object detection model.

For the *Data* property, reference the model predictions. For the *Operations*, select Count Items. This configuration will return the number of predictions made by the object detection model.

#### Bounding Box Visualization

Add a bounding box visualization block to visualize the model results. For the *image* parameter, select the input image. For the predictions, select the model results. You can optionally change the color and size of the bounding boxes using the optional configuration properties.

#### Label Visualization

In addition to drawing bounding boxes, we’ll also want to display the class names of the predictions. To do this, add a *Label Visualization* block after the bounding box visualization. In order to draw both bounding boxes and labels on the same image, you’ll want to set the reference input image as the *bounding_box_visualization* image, instead of referencing the input image. This will draw the labels on top of the bounding boxes.

You can change the optional *Text* parameter to change the display text from class name, to confidence, to class name and confidence.

### Save Changes

When you have finished building your Workflow, click "Save Workflow." If you have deployed the Workflow, your saved Workflow will start running on all devices where the Workflow has been deployed.

Now that you have a completed workflow, it's time to test it.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/test-a-workflow

# Test a Workflow

You can test your Workflow in the browser.

To test a workflow, click the "Test Workflow" button at the top of the Workflow editor.

A pane will open from which you can test your Workflow:

You can test Workflows on images and video streams.

Images are supported on the Hosted API, Dedicated Deployments, and self-hosted servers.

Video streams require a Dedicated Deployment or self-hosted server to test in the UI and deploy on.


You cannot test on video files in the browser.

#### Test on an Image

To test on an image, select the Image input tab then drag and drop an image into the "Drop files here" section of the page:

Then, click "Run" to run your Workflow.

You will see the result of your Workflow on the right side of the testing interface.

By default, the Workflow will show JSON. This JSON contains all the values configured in the "Output" section of your Workflow.

If your Workflow contains an image output (i.e. a Workflow that uses a Visualization block to show the results from a model), you can preview the images by selecting the “Visual” tab in the top left corner of the testing interface.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/deploy-a-workflow

# Deploy a Workflow

You can deploy a Workflow in four ways:

Send images to the

[Roboflow API](https://inference.roboflow.com/workflows/modes_of_running/#http-api-request)for processing using your Workflow.Create a

[Roboflow Dedicated Deployment](/deploy/dedicated-deployments)on infrastructure provisioned exclusively for your use.Run your Workflow on your own hardware using

[Roboflow Inference](https://inference.roboflow.com/install/).Use

[Batch Processing](/deploy/batch-processing)to process large amounts of data without coding cost efficiently.

If you run your Workflow on your own hardware, you can run it on both images and video files (including streams from regular **webcams** and professional **CCTV cameras**).

By choosing on-premises deployment, you can run Workflows on any system where you can deploy Inference. This includes:

NVIDIA Jetson

AWS EC2, GCP Cloud Engine, and Azure Virtual Machines

Raspberry Pi


Roboflow Enterprise customers have access to additional video stream options, such as running inference on Basler cameras. To learn more about our offerings, [contact the Roboflow sales team](https://roboflow.com/sales).

### Deploy a Workflow

To deploy a workflow, click the "Deploy" button in the top left corner of the Workflows editor. All deployment options are documented on this page.

The code snippets in your Workflows editor will be pre-filled with your Workflows URL and API key.

To learn more about usage limits for Workflows, refer to the [Roboflow pricing page](https://roboflow.com/workflows).

#### Process Images

You can run your Workflow on single images using the Roboflow API or local Inference server.

First, install the Roboflow Inference SDK:

If you run locally, follow the [official Docker installation instructions](https://docs.docker.com/get-docker/) to install Docker on your machine and start Inference server:

Then, create a new Python file and add the following code:

Above, replace `API_KEY`

with your Roboflow API key. Replace `workspace-name`

and `workflow-id`

with your Roboflow workspace name and Workflow IDs.

To find these values, open your Roboflow Workflow and click "Deploy Workflow". Then, copy your workspace name and workflow ID from the code snippet that appears on the page.

Local execution works on CPU and NVIDIA CUDA GPU devices. For the best performance, deploy on a GPU-enabled device such as an NVIDIA Jetson or a cloud server with an NVIDIA GPU.

#### Process Video Stream (RTSP, Webcam)

You can deploy your Workflow on frames from a video stream. This can be a webcam or an RTSP stream. You can also run your Workflow on video files.

First, install Inference:

It may take a few minutes for Inference to install.

Then, create a new Python file and add the following code:

Above, replace `API_KEY`

with your Roboflow API key. Replace `workspace-name`

and `workflow-id`

with your Roboflow workspace name and Workflow IDs.

To find these values, open your Roboflow Workflow and click "Deploy Workflow". Then, copy your workspace name and workflow ID from the code snippet that appears on the page.

When you run the code above, your Workflow will run on your video or video stream.

#### Process Batches of Data

You can efficiently process entire batches of data—directories of images and video files—using the Roboflow Batch Processing service. This fully managed solution requires no coding or local computation. Simply select your data and Workflow, and let Roboflow handle the rest.

We support both UI, CLI and REST API interactions with Batch Processing. Below, we present CLI commands. Discover [all options](https://inference.roboflow.com/workflows/batch_processing/about/#cli).

To run the processing, install Inference CLI:

Then you can ingest your data:

When data are loaded, start the processing job:

Progress of the job can be displayed using:

And when the job is done, export the results:

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/manage-workflow-versions

# Manage Workflow Versions

Workflow Versions is a **premium** feature. Without it, previous versions cannot be restored.

For up-to-date information on our plans and their associated features, see our [pricing page](https://roboflow.com/pricing).

Every time you save a Workflow, a new version is saved in your Workflow Version History.

The Version History for a Workflow stores every saved change to the Workflow.

### See Versions

To see Versions of your Workflow, click the clock icon in the right sidebar of the Workflow editor. A panel will open up that shows all saved changes.

The most recent saved version will be marked as Live. This is the Workflow that will run in production when you run the Workflow.

### Set a Version Name

You can set names for versions in your Workflow Version History. To name a version, click the three dots next to a version name then click "Rename":

You can then specify a name for your Workflow version:

The version name will then be updated:

### Roll Back to a Previous Version

You can roll back to a previous version of a Workflow at any time.

To roll back to a previous version, click the three dots next to the name of a Workflow then click "Restore":

The Workflow Version will then appear in your editor. You will need to click the "Save" button to save your changes:

When you press Save, a new version of your Workflow will be created with the changes you rolled back to. This will then be made the Live version of your Workflow.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/share-a-workflow

# Share a Workflow

Share a workflow to let people view, run, and fork the workflow.

Go to your Workflow page and click on the Share Workflow button\

Click on the button

**Copy Share Link**\Send to someone or open in your browser. You will see that this will open a read-only version of your workflow that allows people to see what you built and run previews on it.\


By default, a shared Workflow does not run under your API Keys and credentials. This means that it does not consume your usage limits and replaces any credentials like OpenAI API Key on your blocks as input parameters the user should provide. You can modify that behavior by changing the Workflow Sharing Configuration.

Here's an example of a shareable Workflow that takes a picture as an input and determines the winner of a Rock, Paper & Scissors game. Give it a try!

### How Workflow sharing works with private credentials

By default, a shared Workflow does not run under your API Keys and credentials. This means that it does not consume your usage limits and replaces any credentials like OpenAI API Key on your blocks as input parameters the user should provide. You can change this behavior by changing sharing configurations:

#### Allow people to run a Workflow under your API Key

This is useful when you want to share a Workflow containing a private Model - since the default behavior is not to run under your API key, a Workflow containing a private Model will fail to execute - so you change that to allow a protected run: it will affect your usage limits, but your API Key and model data will always be private.

To do so, go to the **Run access** section and change it to allow anyone to run the Workflow.

This option is **only available when a private Model is detected in the workflow steps**.

This configuration side effects are:

Any previews run under the shareable link will affect your Wokflow usage.

Your private Models data and your API Key will always remain private.

#### Allow people to run a Workflow under your hidden credentials

This is useful when you want to share a workflow that has any step with credentials (LMM, OpenAI, Anthropic, etc.) and let people securely use your own credentials to make it easier for them to try your Workflow - your credentials won't be exposed and will be redacted on any client-facing data.

To do so, go to the **Credentials** section and change it to allow users to execute the Workflow with your hidden credentials.

This option is **only available when a step that needs credentials is detected in the workflow.**

This configuration side effects are:

Any previews run under the shareable link will affect your specific credential usage limits (e.g. OpenAI Api Keys).

Your credentials values will always be private and are redacted from any client-facing data.

Here's an example of a Workflow that runs under a hidden OpenAI API Key to run a License Plate detection + OCR. Give it a try!

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/workflows-ai-assistant

# Workflows AI Assistant

Use the Workflows AI Assistant to help build and debug Workflows.

The Workflows AI Assistant lets you build, update, and debug Workflows from a chat interface.

The Workflows AI Assistant can answer questions about an existing Workflow, make changes based on the goal you have for your project, and fix errors in your Workflow if you encounter one.

To use the Workflows AI Assistant, click the sparkle icon on the left side of the Workflows editing window:

The AI Assistant will open as a sidebar in your Workflows editor:

You can then start to ask questions in the chat interface.

### Editing Workflows

You can ask the Workflows AI Assistant to make changes to your Workflow.

For example, you could ask to:

Add object tracking to a Workflow.

Make your current Workflow run only if a classification model returns a certain result.

Change the confidence threshold of a model used in a Workflow.


When you do, the AI Assistant will make changes, then ask whether you want to save them to your Workflow or revert the changes.

Changes are not saved to your production Workflow until you save changes.

Here is an example of a Workflow where a CSV block was added after asking the Assistant to save records to a CSV file:

Of note, the block may not be configured when added. In this example, the CSV Formatter is created and connected to the relevant block — the one that returns tracked predictions — but does not save any results. You can click into any blocks created by the Workflows AI Assistant to make the necessary configurations according to your project needs.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/blocks-governance

# Blocks Governance

Fine grained control of enabled workflow blocks on a workspace

Blocks Governance is a premium feature, available to select Enterprise plan customers. [Talk to our Sales team](https://roboflow.com/sales) to get access to Blocks Governance.

Super Users can control which workflow blocks are available to users in the workspace. This allows you to manage complexity, enforce best practices, and control which AI models and processing steps your team can use in their workflows.

Super User requires [Custom Role feature](https://docs.roboflow.com/team-members/role-based-access-control#custom-roles) so the page can being seeing. Standard Admin, Labeler, and Reviewer roles do not have access to manage workflow blocks.

Workflow blocks can be enabled or disabled at the workspace level. When a block is disabled:

It will not appear in the block picker when users build workflows

Existing workflows using the disabled block will continue to function

Users cannot add the disabled block to new workflows or existing workflows


This feature helps Super Users:

Simplify the workflow builder interface for specific use cases

Prevent the use of certain AI models or processing steps

Gradually roll out new blocks to users

Maintain consistency across team workflows


## Accessing Workflow Blocks Settings

To manage workflow blocks, you must have the manage_workspace_blocks permission. By default, this permission is only granted to Super Users.

To access the settings:

Navigate to your workspace settings

Select Workflow Blocks from the sidebar

You'll see a list of all available workflow blocks with enable/disable toggles


### Enabling and Disabling Blocks

#### Disabling a Block

To disable a workflow block:

Locate the block in the Workflow Blocks settings list

Toggle the switch to the off position

The block is immediately disabled for all users in the workspace

Users will no longer see this block in the workflow editor's block picker


**Important:** Disabling a block affects existing workflows that use it:

Workflows containing the disabled block cannot be updated or edited

Workflows with disabled blocks cannot be loaded from inference servers

You must modify any such workflows to remove or replace the disabled block before you can continue using them


#### Enabling a Block

To enable a workflow block:

Locate the block in the Workflow Blocks settings list

Toggle the switch to the on position

The block is immediately available to all users in the workspace

Users can now add this block to their workflows


#### Default Behavior for New Blocks

When you disable any workflow block for the first time, all newly created blocks will be disabled by default from that point forward. This behavior ensures that:

New blocks don't automatically become available without Super User review

You maintain control over which blocks are accessible to your team

Blocks can be tested and validated before being enabled for general use


After the first block is disabled, any new blocks added to Roboflow will require explicit enablement in the Workflow Blocks settings before users can access them in the workflow editor.

#### Impact on the Workflow Editor

When a block is disabled, users will see it in the block picker in a disabled state. This allows users to be aware of the block's existence while preventing them from using it.

Disabled blocks:

Appear in the block picker with a visual indication that they are disabled (e.g., grayed out)

Are visible in search results and block categories

Cannot be dragged into the workflow canvas

Allow users to see that the block exists and request enablement from a Super User if needed


This approach maintains visibility while preventing usage, enabling users to reach out to Super Users to request that specific blocks be enabled if they are needed for their workflows.

### Common use cases for managing block availability:

Restricting AI Models: Disable blocks that use specific AI models you don't want users to access (e.g., certain premium models or models not suitable for your use case)

Simplifying Workflows: For teams focused on specific tasks, disable irrelevant blocks to reduce clutter and confusion

Phased Rollout: When new blocks are released by Roboflow, keep them disabled initially and enable them once training and documentation are ready

Compliance: Disable blocks that don't meet your organization's security, privacy, or compliance requirements

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/workflows/enterprise-integrations

Explore Workflows integrations available to enterprise customers.

Workflows has custom blocks you can use to integrate your vision Workflow with your enterprise systems.

These blocks are available exclusively to customers on an Enterprise plan. If you would like to learn more about how these blocks can be used with your project, contact the sales team or your account manager.

---

## Source: https://docs.roboflow.com/datasets/create-a-project

# Create a Project

Create a project in your workspace.

Before you train a model, you need to create a Project.

A Project contains images and annotations. This data can then be turned into a dataset version, a snapshot of your data frozen in time. Versions can then be used to train models.

### Create a Project

First, go to the Roboflow dashboard. Then, click "Create New Project":

You will be taken to a page where you can create a new project:

On this page, you will need to fill out:

**A project type**.: Find the location of objects in an image.**Object Detection**: Given a limited set of categories, assign a label to an image.**Single-Label Classification**: Given a limited set of categories, assign an arbitrary number of labels that are relevant to the image.**Multi-Label Classification**: To the pixel level, find the location of objects in an image.**Instance Segmentation**: To the pixel level, find the location of objects in an image and create unique references for each object found.**Semantic Segmentation**: Find the location of objects and their keypoints in an image. Commonly used for determining the pose of an object.**Keypoint Detection**

**A project name:**The name of your project.**What you are detecting**: A label that summarizes what you are detecting.

When you have specified these values, submit the form to create the project.

*If you would like to see another type of project supported you can select the option from the dropdown of project types to indicate your interest.*

If you are on a free plan, your datasets and models will be [available on Roboflow Universe](/universe/what-is-roboflow-universe). If you are on a paid plan, you can create private projects. Private projects are only accessible to your Workspace and are never public.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/adding-data

# Upload Images, Videos, and Annotations

Upload images, videos, and annotations to Roboflow.

The first step to training and deploying a model with Roboflow is to upload data to a Project.

First, you will need to [create a Project](/datasets/create-a-project).

Then, you will be taken to a web page from which you can upload data. You can also access this page from the "Upload Data" button available in your project sidebar.

## How to Add Data

You can add data to your Roboflow account by:

Using the web application: Recommended for datasets with fewer than 1,000 images.

Using the command line: Recommended for datasets with greater than 1,000 images.

Using the Dataset Upload Workflow Block: Recommended for collecting data from Workflows with a model already in production.


From the web application and command line, you can upload:

JPG, PNG, WEBP, AVIF, and BMP images.*

MOV and MP4 videos.

PDF files.


**Max size of 20MB and 16,400 x 10,900 pixels.*

You can only upload annotations with their associated images. You cannot upload annotations for images that have already been imported into your dataset.

## Upload Data with the Web Application

When you create a project, or on the Upload Data page, you will see a box into which you can drag and drop images, videos, and annotations:

[Over 40+ annotation formats are supported.](https://roboflow.com/formats) The formats supported vary based on your project type.

## How file names are processed

We sanitize class names both at upload/import and export so image file names can be standardized. At upload and dataset export, we perform the following:

Trimming leading/trailing whitespace

All whitespace (including newlines & tabs) are converted to a space

Double spaces are removed

`/.[]#~*`

characters are replaced with a dash (`-`

)`|'"`

characters are removed

### Upload Video

Uploaded videos are broken up into individual frames you can annotate. If you upload a video, a window will open from which you can choose how often frames are sampled for use in your dataset:

Once you click "Choose Frame Rate", your video will be split up into frames. These frames will then be uploaded to your dataset.

Once you have uploaded your dataset, you will be able to assign the data for labeling.

Once you drop them into the Web UI, a dialog box will ask you to choose the **frame rate**. This will tell us how many images we should sample from your video per second.

The highest frame rate you can select is 60 frames per second, which will generate 60 images for each second of video you upload.

The lowest frame rate you can select is 1 frame per 60 seconds.


After sampling from your video, the images will appear as if you had originally uploaded images to Roboflow.

## Supported video file formats

Roboflow uses your browser's built in support for video files to parse videos into frame images that you can use to train your models. That means you can use many different video formats, including MOV and MP4 files, depending on what browser you are using.

You can [check which video formats are supported by your browser](https://caniuse.com/?search=video%20format).

Note that e.g. HEVC/H.265 encoded MP4 files are only supported by the Safari browser. If you are importing from a GoPro or iPhone that shoots in H.265 you may want to change the settings to H.264 which is more widely supported.

If you are having trouble getting your video file loaded into Roboflow, you can post on our [forum](https://discuss.roboflow.com/) or contact your account representative.

## Upload Datasets with the Command Line

You can upload larger datasets using the Roboflow Python command line interface.

You can only upload images with the command line interface. If you have videos, you will need to [split them into frames saved as files](https://superuser.com/questions/1044444/how-do-i-use-ffmpeg-to-split-a-video-into-images-and-then-reassemble-exactly-the). These files can then be uploaded to Roboflow.

To get started, first install `roboflow-python`

:

Next, [retrieve your Workspace ID](https://docs.roboflow.com/developer/rest-api/workspace-and-project-ids).

Finally, prepare a command in the following format:

Here are the arguments you need to specify:

`-w testupload`

: This is the workspace name.`-p <project-id>`

: This is your project ID.

When you run the command, you will see a message that indicates the upload process has started. You will then see logs as images upload:

We have a video walkthrough that shows how to upload data from the command line:

## View Your Uploaded Data

All data uploaded to Roboflow is uploaded in a "batch". These batches can be viewed on your Project Annotate page:

## Image Size limits

The maximum size for an image is 20 MB

The maximum pixel dimensions are 16,400 × 10,900 pixels.

## Duplicate Images

If you try to upload an image that is already in a Project, upload for that image will be skipped.

If you [merge two datasets](https://docs.roboflow.com/merge-datasets), the merged dataset and the two original datasets exist in your account. Therefore, there is no charge for the merge, because the images are duplicates.

## Data Ownership

You retain ownership over all images and videos you upload to Roboflow. This is defined in [our Section 23B of our Terms of Service](https://roboflow.com/terms):

You retain all ownership rights in any content, information, or materials You post, submit, publish, display, or transmit


## Data Privacy

**Public Plan:** If you are on the Public plan unless explicitly specified and arranged by Roboflow, your datasets will be public on Roboflow Universe.

**Paid Plans (including Enterprise):** Unless otherwise specified, your data is private to your account.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/manage-datasets

# Manage Datasets

Roboflow provides a suite of features for use in managing your datasets.

These include:

[Dataset Batches](/datasets/manage-datasets/manage-batches), which help you keep track of different batches of uploaded data.[Dataset Search](/datasets/manage-datasets/dataset-search), which lets you find images that match both natural language search and queries by attributes like file name and number of annotations in an image.[Dataset Class Management](/datasets/manage-datasets/manage-classes), which lets you set classes for your dataset. This is ideal for setting classes before and while a dataset is being annotated by a labeling team.[Image Tags](/datasets/manage-datasets/add-tags-to-images), which let you save metadata about an image.[Annotation Attributes](/datasets/manage-datasets/create-an-annotation-attribute), ideal for when you need to apply extra attributes to annotation.

This section of the documentation walks through each of these features.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/dataset-versions

# Dataset Versions

Versions are point-in-time snapshots of the images and labels in your dataset. When you create a Version, you can apply preprocessing steps and augmentations to your dataset.

To train a model in Roboflow, you need to create a Dataset Version.

This section of our documentation walks through how to prepare to train a model. You will need to:

**Open the Versions page and create a new version**

Follow our guide to get to the [page that lets you create a dataset version](/datasets/dataset-versions/create-a-dataset-version).

**Choose preprocessing steps**

Select the [preprocessing steps](/datasets/dataset-versions/image-preprocessing) you need to train your model.

**Apply augmentations**

[Apply any augmentations to your dataset](/datasets/dataset-versions/image-augmentation). We have a guide that walks through which augmentations are appropriate for different use cases.

**Confirm your Version**

Your Version will be created and will now be available for use in training models.

**Train a model**

Follow our [model training documentation](/train/train) to configure your training job.

You can also [export a dataset version](/datasets/dataset-versions/exporting-data).

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/dataset-health-check

# Dataset Analytics

Assess and improve the quality of your dataset.

Dataset Analytics shows a range of statistics about the dataset associated with a project. You can see the following pieces of information:

Number of images in your dataset;

Number of annotations;

Average image size;

Median image ratio;

Number of missing annotations;

Number of null annotations;

Image dimensions across your dataset;

Object count histogram, and;

A heatmap of annotation locations.


Using Dataset Analytics, you can derive a range of insights about your dataset. For example, if you have no null annotations, you may want to consider adding a few depending on the project on which you are working; if there are images with missing annotations, you can dig deeper to add the requisite annotations.

To see Dataset Analytics for a project, click "Analytics" in the left sidebar of a project:

The Dataset Analytics tab will then open:

On this page, you can see:

A breakdown of the number of classes in the images in your train, test, and valid datasets.

An overview of the sizes and aspect ratios of the images in your dataset.

A heatmap showing where most of your annotations are.

A histogram showing how many classes are annotated in each image in your dataset.


### Dimension Insights

The Dimension Insights section describes the sizes and aspect ratios of raw images in your dataset.

If you apply the Resize augmentation when you create a project version — which we strongly recommend for almost all use cases — images in your version will be resizes, but the raw images will stay the same.

### Annotation Heat Map

When you are training a model, it is important that your dataset is representative of the conditions in which your model will be deployed.

If your model will be deployed in an environment in which annotations may appear anywhere in the camera frame — for example, on a factory line where objects of different sizes are moving in real time, or in an image taken on a phone of an object — it is important that you annotate objects that appear in different places in an image.

Labeling objects in different parts of an image will ensure your model doesn't overfit to learn only how to identify objects in specific places.

The Annotation Heat Map shows where there are more or less annotations in images. This can be used to identify scenarios where your dataset annotations are too concentrated in a particular place.

You can drag over an area in the Heat Map to see images in the chosen range:

### Histogram of Object Count by Image

This shows you the distribution of how many annotated objects appear in each image.

If images that you pass through your model may contain multiple instances of an object, we recommend ensuring your dataset contains images with different numbers of object instances. This will help you ensure your model can generalise well to images with no, one, or multiple objects of interest.

Here if an example of a histogram:

You can select any of the bars on the histogram to see images with a given count:

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/merge-datasets

# Merge Projects

Combine projects that exist within the same workspace.

You can combine different projects together to make a single project in which you can train a model.

If you have Project A and Project B and merge them to create Project C, Project C will be composed of the unique images joined from Projects A and B. Projects A and B will also still exist in the Workspace, not be eliminated.

**How to Merge Projects**

**How to Merge Projects**

To merge projects:

Hover your mouse on the three dots on the right side of one of the datasets you wish to include the merged dataset. Click the highlighted button (three horizontal dots), and select "Merge Datasets."

Select the datasets you wish to merge by clicking the checkboxes on the right side of each dataset.

Click "Merge Datasets" in the upper-right corner.

Name your new dataset and new annotation group click "Merge Datasets."


The merged dataset will contain the images (and any associated annotations) *present at the time of merging*.

In addition to the merged dataset, you retain the original datasets. In the above example, there are three datasets: the two originals and the newly merged dataset.

The best part is, because the merged dataset consists of copies of other photos, you aren't charged for extra images!

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/rename-a-project

# Rename a Project

You can rename existing Projects in your Roboflow Workspace.

If you rename a Project, your Project URL will change. This means that you will need to update any scripts that call your Project model APIs to use your new Project ID.

To rename a Project, open a Project in Roboflow. Then, click the three dots next to the Project name in the application sidebar:

Click "Rename Project". A window will appear from which you can rename your Project:

Click "Rename Project" to rename your Project. This action is irreversible.

Your Project name will change immediately. Any scripts that reference your old project ID will stop working.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/delete-a-project

Learn how to delete a project from your account in Roboflow

Keep in mind that deletions are permanent and irreversible. Please make sure you are confident deleting the project.

Click the three dots beside a project listing on the dashboard or the sidebar in your project

Click "Delete Project"

Follow the prompts given and confirm the deletion.

Last updated 1 year ago

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/project-folders

# Project Folders

Project Folders improves the organization and security of projects within your workspace. Folders allow you to group one or more projects into distinct categories, which improves your ability to navigate, organize, and manage your projects. Additionally, for workspaces with SSO enabled, you can restrict access to projects within a folder to certain team members, which enhances the security of your data.

#### Viewing Folders

From your workspace view, any Project Folders you have will appear at the top. Your workspace can have one or more Project Folders, and each Project Folder can contain one or more Projects.

#### Creating a Folder

To create a new folder, click the "+ New Folder" button in the top right. Provide a name for your folder and click "Save". The page will navigate to your project folder where you can create a new project. Any project created from the project folder view will automatically added to that folder.

[[Roboflow Documentation] Project Folders - Create Project - Watch Video](https://www.loom.com/share/aefb3b5fd1ea40cdb4183c903f13d9c8)

#### Renaming a Folder

To rename a folder, click on the dropdown menu (3 dots) on the project folder. Select the "Rename" option, and then provide the new name for your project. After clicking "Save", your folder will have its new name.

[[Roboflow Documentation] Project Folders - Rename Folder - Watch Video](https://www.loom.com/share/63508a2ff629454690ac0957d5cfc990)

#### Managing Projects in Folders

You can move existing projects into a folder. To move a project, click on the project's dropdown menu (3 dots) and select "Move Project". You will then see a pop up where you can select the new target destination. If you do not have any project folders, you can add one by clicking the "New Folder" button. Otherwise, you can select any of your existing folders as the target location. If you want to move your project out of a folder, you can select your workspace's name.

[[Roboflow Documentation] Project Folders - Move Project - Watch Video](https://www.loom.com/share/a411cabb98f14255b07c3c2e209c3abd)

#### Deleting a Folder

You can delete a folder by clicking the dropdown menu (3 dots) on the project folder and selecting the "Delete" option (this action cannot be undone). Deleting a folder **will not** delete the projects in the folder, it will move those projects back to the workspace level.

[[Roboflow Documentation] Project Folders - Delete Folder - Watch Video](https://www.loom.com/share/852e70b217de4d5d9ca79bef41903ad9)

### Custom Folder Permissions

Folders provide a great way to organize and manage your projects, but they also enable you to set custom permissions for a subset of your folders. For example, if you only want a few members of your workspace to access projects in a particular folder, you can accomplish that with Roboflow's SSO integration. To get started, please contact support and we will be happy to get you set up.

### Project Folders API

Project Folders can be managed programmatically using the Roboflow API. For details on available endpoints, view the [Project Folders API](/developer/rest-api/manage-project-folders) documentation.

Last updated

Was this helpful?

---

## Source: https://docs.roboflow.com/datasets/make-a-project-public

Share your computer vision dataset and models with the world on Roboflow Universe

Once you have your dataset and models, you have the option to share them with the world on Roboflow Universe.

How to Publish Your Project on Universe

The free Public plan has public data by default, so you don't need to follow this section. On paid plans, data is private by default unless you select otherwise.

You can make your project public on Roboflow by selecting the "Make Public" option on the Projects page.

Then, you'll be prompted to select a license to share your dataset under.

If your dataset contains copyrighted images, proprietary/private data, unsafe for work content (NSFW/NSFL), or personally identifiable information (PII), you should never publish that data on Roboflow Universe and opt to do your work in a private workspace instead.

---

## Source: https://docs.roboflow.com/datasets/download-a-dataset

# Download a Dataset

Export your dataset of images and annotations for training locally.

To download a dataset from Roboflow, you must first [create a dataset version](/datasets/dataset-versions/create-a-dataset-version).

Refer to the [Download a Roboflow Universe Dataset](/universe/download-a-universe-dataset) documentation if you want to download a dataset from Roboflow Universe.

Navigate to the Version that you want to download in the Roboflow dashboard. Then, click the "Download Dataset" button in the top right corner:

A modal will appear giving you options for formats to download your data as. Roboflow supports [over 50 different annotation formats](https://roboflow.com/formats).

You can also choose to either download your dataset directly as a zip file or be provided with a code snippet to download the data locally.

If you choose the code option, you will be able to choose from a Python code snippet, a curl command, or a direct download link to your dataset.

## FAQs

## Why don't my zipped image counts match the UI?

There are two possibilities for this:

An image randomly failed to download in the respective cloudly service.

The image is corrupt or too large, leading to some errors.


Our application only generates the export zip once and then re-downloads the same export if the same format (e.g. COCO) is selected. If you ever notice that the image count is off in the download, you can always create a new version and re-download.

\

## Are the downloaded images the original quality?

No. To prevent training slowdowns, we compress images at a level that maintains a balance between training speed and resolution needed for sufficient model performance.

If you're looking to download a single original quality image, you can do so by clicking on a image on your dataset and selecting "Download Image".

If you're looking to download multiple original quality images, we recommend using our [CLI](https://docs.roboflow.com/developer/command-line-interface/download-a-dataset) or our [Image Search API](https://docs.roboflow.com/developer/search-images-in-a-dataset).

Last updated

Was this helpful?