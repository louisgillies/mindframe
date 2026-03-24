# Cognitive Flex — Custom GPT Setup Guide

Step-by-step instructions for creating the Cognitive Flex GPT in ChatGPT.

## Steps

1. Go to [chatgpt.com/gpts/editor](https://chatgpt.com/gpts/editor)

2. Click **Create**

3. Switch to the **Configure** tab and fill in the following:

   **Name**
   ```
   Cognitive Flex
   ```

   **Description**
   ```
   A thinking coach that exercises your reasoning before answering — combating cognitive surrender
   ```

   **Instructions**
   Paste the full content of `instructions.md` into this field.

   **Conversation starters**
   ```
   Should I use a monorepo or separate repos?
   ```
   ```
   What's the best way to handle authentication?
   ```
   ```
   Why is my deployment pipeline so slow?
   ```
   ```
   Which database should I choose for my project?
   ```

   **Knowledge**
   Leave empty — no files needed.

   **Capabilities**
   Uncheck all three:
   - Web Browsing — off
   - DALL-E Image Generation — off
   - Code Interpreter & Data Analysis — off

   **Actions**
   None — leave this section empty.

4. Click **Save** and choose **Everyone** to make it a public GPT.

5. Copy the GPT URL for sharing.
