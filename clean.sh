#!/bin/sh

cleancss -o site/dejavu-fonts/mono.min.css site/dejavu-fonts/mono.css --skip-rebase --compatibility '*,+properties.urlQuotes'
cleancss -o site/dejavu-fonts/regular.min.css site/dejavu-fonts/regular.css --skip-rebase --compatibility '*,+properties.urlQuotes'