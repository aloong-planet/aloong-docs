---
sidebar_position: 2
title: Github Actions
description: Collection of useful GitHub Actions
---

# Github Actions

This documentation is mirrored from our [Aloong Actions Organization](https://github.com/aloong-actions/.github/blob/main/profile/README.md).

## Available Actions

### [Jenkins Job Trigger](https://github.com/aloong-actions/jenkins-job-trigger)

A Go-based action that triggers Jenkins jobs and waits for their completion. This action provides seamless integration between GitHub and Jenkins, making it perfect for CI/CD pipelines that span both platforms.

### [Repo Force Sync](https://github.com/aloong-actions/repo-force-sync)

A specialized action for synchronizing two independent repositories using force push. It features branch-specific synchronization controlled by a whitelist, making it ideal for maintaining mirror repositories or managing code distribution across multiple repositories.

> ⚠️ **Warning**: This action uses force push which will overwrite the destination branch. Always backup your repository before use.

### [Gitleaks](https://github.com/aloong-actions/gitleaks)

A security-focused action that scans your repository for hardcoded secrets using the powerful Gitleaks tool. It helps prevent accidental exposure of sensitive information like API keys, passwords, and tokens in your codebase.

### [Teams Deploy Card](https://github.com/aloong-actions/teams-deploy-card)

An enhanced Microsoft Teams notification action that provides comprehensive deployment cards. It improves upon the original ms-teams-deploy-card with better actor detection, improved layout, and additional workflow notifications for committers.

## Getting Started

Each action has its own documentation with detailed usage instructions. Visit our [GitHub Organization](https://github.com/aloong-actions) to learn more about their specific features and configuration options.