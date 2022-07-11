npm run lint:fix

if [[ `git status --porcelain` ]]; then
  echo 'Changes'
  git add -A && git commit -m "Performing auto-lint fix"
  git push
else
  echo "No changes"
fi