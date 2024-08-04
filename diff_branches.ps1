# Get the list of branches excluding the current branch
$branches = git branch | Where-Object { $_ -notmatch "^\*" } | ForEach-Object { $_.Trim() }

# Debugging: Output the list of branches
Write-Host "Branches to compare:" $branches

# Iterate over each branch and compare with main
foreach ($branch in $branches) {
    Write-Host "Differences between main and ${branch}:"
    git diff --name-only main $branch
    Write-Host ""
}