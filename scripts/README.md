# Scripts

Contributor-side tooling only. **Learners never need anything in this folder** — the learner path is zero-terminal by constitution.

## Deploying the site

The model in one line: your Mac builds the site and mails the finished files to Dreamhost; the server just holds files.

One-time setup (saves the server address):

```bash
echo "youruser@yourserver.dreamhost.com:~/cdesktop.deanpeters.com/" > scripts/.deploy-destination
```

Every deploy after that, from the repo root on your Mac:

```bash
./scripts/deploy.sh
```

That's it. The address file is gitignored, so your login never enters the repo. Run `ssh-copy-id youruser@yourserver.dreamhost.com` once if you want deploys to stop asking for your password.

Future candidates: link checking, lesson-to-site sync helpers, publish prep.
