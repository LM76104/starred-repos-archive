# 🔄 Synchronization Guide

**Keep Your Archive Up-to-Date with the Latest Changes from All 37 Projects**

---

## 📋 Overview

The synchronization system allows you to:
- ✅ Update all 37 repositories automatically
- ✅ Track changes from original projects
- ✅ Merge updates without conflicts
- ✅ Preview changes before applying (`--dry-run`)
- ✅ Sync specific projects selectively
- ✅ Schedule regular automatic updates

---

## 🚀 Quick Start

### **One-Time Setup**

```bash
# Navigate to archive directory
cd starred-repos-archive

# Make script executable
chmod +x sync.sh

# Verify script works
bash sync.sh --help
```

### **First Sync (Preview)**

```bash
# See what will be updated (no changes made)
bash sync.sh --dry-run

# See summary only
bash sync.sh --dry-run --summary
```

### **Perform Full Sync**

```bash
# Update all 37 repositories
bash sync.sh

# Save sync log for review
bash sync.sh > sync_$(date +%Y%m%d_%H%M%S).log
```

---

## 📖 Usage Guide

### **Sync All Projects**
```bash
bash sync.sh
# Output:
# ✅ obra_superpowers: 3 new commits
# ✅ affaan-m_ECC: 12 new commits
# ✅ codegraph: 0 changes
# ...
# Total: 37 projects synced in 3min 42sec
```

### **Sync Specific Project**
```bash
bash sync.sh --repo obra_superpowers
bash sync.sh --repo affaan-m_ECC
bash sync.sh --repo Lum1104_Understand-Anything
```

### **Preview Changes**
```bash
# See all changes before applying
bash sync.sh --dry-run

# See changes for specific project
bash sync.sh --repo obra_superpowers --dry-run

# View summary only (faster)
bash sync.sh --dry-run --summary
```

### **Sync Specific Categories**
```bash
# Sync all agent frameworks
bash sync.sh --category "agent-frameworks"

# Sync document processing projects
bash sync.sh --category "document-processing"

# Available categories: agent-frameworks, resource-collections, code-analysis, 
# document-processing, memory-systems, integrations, utilities
```

### **Advanced Options**

```bash
# Update metadata only (fast - no file changes)
bash sync.sh --metadata-only

# Shallow clone (faster, less disk space)
bash sync.sh --shallow

# Resume interrupted sync
bash sync.sh --resume

# Parallel sync (faster for many projects)
bash sync.sh --parallel 4

# Verbose output
bash sync.sh --verbose

# Quiet mode (minimal output)
bash sync.sh --quiet
```

---

## 📅 Recommended Sync Schedule

### **By Project Activity Level**

| Activity | Frequency | Command |
|----------|-----------|---------|
| **High** (ECC, Superpowers) | Weekly | `bash sync.sh --repo affaan-m_ECC` |
| **Medium** (Most projects) | Monthly | `bash sync.sh` |
| **Stable** (Reference projects) | Quarterly | `bash sync.sh --category resource-collections` |

### **Automated Scheduling**

#### **macOS / Linux (using cron)**

```bash
# Open crontab editor
crontab -e

# Add one of these lines:

# Weekly sync every Sunday at 2 AM
0 2 * * 0 cd ~/path/to/starred-repos-archive && bash sync.sh >> sync.log 2>&1

# Monthly sync on the 1st at 3 AM
0 3 1 * * cd ~/path/to/starred-repos-archive && bash sync.sh >> sync.log 2>&1

# Daily metadata-only sync
0 6 * * * cd ~/path/to/starred-repos-archive && bash sync.sh --metadata-only >> sync.log 2>&1
```

#### **Windows (using Task Scheduler)**

```batch
# Create a batch file: sync-archive.bat
@echo off
cd C:\path\to\starred-repos-archive
bash sync.sh >> sync.log 2>&1
```

Then schedule via Task Scheduler to run at desired time.

#### **GitHub Actions (Alternative)**

Create `.github/workflows/sync.yml`:

```yaml
name: Sync Repositories

on:
  schedule:
    - cron: '0 2 * * 0'  # Weekly Sunday 2 AM
  workflow_dispatch:     # Allow manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run sync
        run: bash sync.sh
      - name: Commit changes
        run: |
          git config user.email "bot@example.com"
          git config user.name "Sync Bot"
          git add -A
          git commit -m "chore: auto-sync repositories" || true
          git push
```

---

## 🔍 Understanding Sync Output

### **Example Output**

```
📦 Starred Repositories Archive Sync
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Syncing 37 projects...

✅ obra/superpowers
   → 3 new commits
   → Updated: skills/writing-plans/SKILL.md
   → Updated: README.md

⚠️  affaan-m/ECC
   → 12 new commits
   → CONFLICT: rules/typescript/style.md
   → Resolution: Keeping local version
   → Run: git merge to resolve manually

✅ colbymchenry/codegraph
   → No changes

✅ MemPalace/mempalace
   → 5 new commits
   → Deleted: deprecated_feature.py
   → Added: src/new_feature.rs

...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Sync Summary
   ✅ Successful: 36/37
   ⚠️  Conflicts: 1/37
   ⏭️  Unchanged: 2/37
   ⏱️  Time: 3m 42s
   📊 Total Changed: 47 files

Next: Resolve conflicts with: git status
```

---

## 🛠️ Troubleshooting

### **Issue: "Command not found: sync.sh"**
```bash
# Solution: Ensure you're in the archive directory
cd ~/path/to/starred-repos-archive
bash sync.sh
```

### **Issue: "Permission denied"**
```bash
# Solution: Make script executable
chmod +x sync.sh
bash sync.sh
```

### **Issue: "Network timeout during sync"**
```bash
# Solution: Resume interrupted sync
bash sync.sh --resume

# Or retry with longer timeout
bash sync.sh --timeout 300
```

### **Issue: "Merge conflicts detected"**
```bash
# Solution 1: Preview conflicts
bash sync.sh --dry-run

# Solution 2: Use strategy to resolve
bash sync.sh --strategy keep-local  # Keep your changes
bash sync.sh --strategy keep-remote # Use original changes

# Solution 3: Manual resolution
git status
# Edit conflicted files
git add .
git commit -m "Resolved sync conflicts"
```

### **Issue: "Out of disk space"**
```bash
# Solution: Use shallow clone (saves 50%+ space)
bash sync.sh --shallow

# Or sync individual projects
bash sync.sh --repo obra_superpowers
```

### **Issue: "Sync too slow"**
```bash
# Solution 1: Use parallel syncing
bash sync.sh --parallel 4

# Solution 2: Metadata only (fast check)
bash sync.sh --metadata-only

# Solution 3: Sync specific category
bash sync.sh --category agent-frameworks
```

---

## 📊 Monitoring Sync Health

### **Check Last Sync Time**
```bash
ls -l sync.log
cat sync.log | tail -20
```

### **Get Sync Statistics**
```bash
bash sync.sh --stats
# Output:
# Total projects: 37
# Last synced: 3 days ago
# Average sync time: 3m 45s
# Total changes tracked: 524 commits
```

### **Verify All Projects Initialized**
```bash
bash sync.sh --verify
# Output:
# ✅ obra_superpowers: Ready
# ✅ affaan-m_ECC: Ready
# ⚠️  some_project: Not initialized (run: bash sync.sh --init)
```

---

## 🚀 Advanced Configurations

### **Custom Sync Configuration**

Create `sync-config.json`:

```json
{
  "schedule": "weekly",
  "parallel_workers": 4,
  "merge_strategy": "keep-local",
  "skip_projects": [
    "optional_project_1",
    "optional_project_2"
  ],
  "auto_commit": true,
  "notify_on_changes": true,
  "max_retries": 3,
  "timeout_seconds": 300
}
```

Then run:
```bash
bash sync.sh --config sync-config.json
```

### **Selective Sync with Filters**

```bash
# Sync only Python projects
bash sync.sh --language python

# Sync only MIT licensed projects
bash sync.sh --license MIT

# Sync projects with >1K stars
bash sync.sh --min-stars 1000

# Sync recently active projects (updated in last 7 days)
bash sync.sh --active-within 7d
```

---

## 📈 Sync Logs & History

### **View Sync History**
```bash
# Show last 10 syncs
cat sync_history.log | tail -20

# Filter by project
cat sync_history.log | grep "obra_superpowers"

# Count total syncs
cat sync_history.log | wc -l
```

### **Export Sync Report**
```bash
# Generate HTML report
bash sync.sh --report html > sync_report.html

# Generate JSON for processing
bash sync.sh --report json > sync_data.json

# Generate CSV for spreadsheet
bash sync.sh --report csv > sync_data.csv
```

---

## 🔒 Safety & Best Practices

### **Before Running Sync**

✅ **Backup your changes:**
```bash
git add -A
git commit -m "Local changes before sync"
```

✅ **Preview first:**
```bash
bash sync.sh --dry-run
```

✅ **Check disk space:**
```bash
df -h .  # At least 5GB free recommended
```

### **During Sync**

✅ **Don't interrupt sync** - Let it complete
✅ **Monitor progress** - Watch the output
✅ **Note any conflicts** - Address them after

### **After Sync**

✅ **Review changes:**
```bash
git log --oneline -20
git diff --stat HEAD~5..HEAD
```

✅ **Test functionality:**
```bash
# Run tests if available
cd repos/[project]
npm test  # or: python -m pytest
```

✅ **Commit if satisfied:**
```bash
git add -A
git commit -m "chore: sync repositories - [date]"
git push
```

---

## 📝 Maintenance Tasks

### **Monthly Checklist**

```bash
# 1. Check sync health
bash sync.sh --verify

# 2. Run full sync
bash sync.sh

# 3. Review changes
git log --oneline -50

# 4. Clean up old logs
find . -name "sync_*.log" -mtime +30 -delete

# 5. Update manifest if needed
# (manual - check for new projects to add)
```

### **Quarterly Tasks**

```bash
# 1. Full verification
bash sync.sh --verify --verbose

# 2. Backup archive
tar -czf archive-backup-$(date +%Y%m%d).tar.gz repos/

# 3. Update documentation
# Check for major version changes in projects

# 4. Test disaster recovery
# (optional: restore from backup)
```

---

## 🎯 Common Workflows

### **Workflow 1: Stay Updated Weekly**

```bash
# Every Sunday at 2 AM (via cron)
bash sync.sh > sync_$(date +%Y_%m_%d).log

# Review changes
tail -50 sync_*.log

# Commit if all good
git add -A && git commit -m "Weekly sync"
```

### **Workflow 2: Deep Dive into One Project**

```bash
# Sync specific project
bash sync.sh --repo affaan-m_ECC

# Navigate and explore
cd repos/affaan-m_ECC
git log --oneline -20
cat README.md

# Copy to workspace
cp -r . ~/workspace/ecc-latest
```

### **Workflow 3: Track Specific Changes**

```bash
# Get changes in last 7 days
bash sync.sh --since "7 days ago" --summary

# Focus on agent frameworks
bash sync.sh --category agent-frameworks --verbose

# Create custom report
bash sync.sh --report json | jq '.[] | {name, commits}'
```

---

## ❓ FAQ

**Q: How long does a full sync take?**  
A: 3-8 minutes depending on network speed and project sizes.

**Q: Can I sync while working locally?**  
A: Yes, if you commit/stash your changes first and resolve any conflicts.

**Q: Should I sync before or after my changes?**  
A: Best practice: sync → make changes → commit → push

**Q: What if sync fails mid-way?**  
A: Run `bash sync.sh --resume` to continue from where it stopped.

**Q: How much disk space do I need?**  
A: ~5GB for full clones, ~2GB with `--shallow` option.

**Q: Can I exclude certain projects from sync?**  
A: Yes, use `sync-config.json` with `skip_projects` list.

---

## 📞 Support

For sync issues:
1. Check troubleshooting section above
2. Review sync logs: `cat sync.log | tail -100`
3. Try `bash sync.sh --verify`
4. Manual recovery: `git status` and resolve conflicts

---

**Happy syncing! 🚀**

Last Updated: June 7, 2026
