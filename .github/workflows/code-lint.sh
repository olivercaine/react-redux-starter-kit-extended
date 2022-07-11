npm run lint:fix

if [[ `git status --porcelain` ]]; then
  echo 'Changes'
  git add -A && git commit -m "Performing auto-lint fix"
  git push
  exit 1
else
  echo "No changes"
  exit 0
fi