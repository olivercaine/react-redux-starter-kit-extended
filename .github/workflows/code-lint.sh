if [[ `git status --porcelain` ]]; then
  echo 'Changes'
  npm run lint:fix
  # git add -A && git commit -m "Your Message"
else
  echo "No changes"
fi