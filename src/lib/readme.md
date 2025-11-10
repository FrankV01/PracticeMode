# Framework-agnostic utilities/helpers


5. lib/ should only contain “pure” utilities

If it touches:

environment

network

framework
…it does not belong in lib/.

lib/ should be reusable outside this project.

Otherwise you’re building chaos.