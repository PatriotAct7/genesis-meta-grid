cd ~/genesis-meta-grid
echo "# Genesis Meta Grid

A simple React app with routing (Login → Dashboard).  
Built with Vite and React Router.

## Run locally
cd client
npm install
npm run dev

Open http://localhost:5173 in your browser.
" > README.md

git add README.md
git commit -m "docs: add project README"
git push
