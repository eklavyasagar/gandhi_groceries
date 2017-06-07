ClicBank Standalone Snapshot Offline Build
==========================================

Introduction
------------

This guide provides the information about deploying ClicBank standalone snapshot
offline build on linux.

Prerequisite
------------

1. Ensure following packages are insalled in the machine by root user
   ``gcc gcc-c++ make openssl-devel bzip2-devel zlib-devel readline
   readline-devel libxml2-devel libxslt-devel glib2-devel unixODBC
   libevent-devel python-devel unixODBC-devel libaio sqlite-devel``


Deployment
----------

Following steps has to be performed by non-root user

1. Extract the clicbank snapshot tar file `tar xvf clicbank_snapshot.tar.gz`

2. Navigate to clicbank_snapshot directory `cd clicbank_snapshot`
   Ensure to change mxodbc-license egg in `clicbank_snapshot/downloads/dist` according to client.

3. Install Python and other dependencies for buildout `./installpy27.sh -s`

4. Install clicbank snapshot `./usr/bin/buildout -c linux.cfg -v`

5. Set target directory `export CLICBANK_SOURCES_ROOT_PATH=/snapshots/will/be/copied/here`.
   Ensure you have write permission for the above directory.
   By default it will be copied to `root` directory.

6. Export enviroment variables for oracle support `source ./bin/cxoracle_env.sh`


Verification
------------

1. Verify the Snapshot Utility script

   ::

     e.g.,
     cd bin/exportjivasnapshot

How to run the snapshot utility
--------------------------------

There are two different ways to execute the snapshot script:
  1. When running the exportjivasnapshot script, pass the json(snapshot_configurations.json) file as an argument to it.
     This json file contains all the necessary parameters required to connect to a database.

    ::

      e.g.,
      ./bin/exportjivasnapshot snapshot_configurations.json

    | After running the above command, it asks you to enter the Database password.
    | Enter password and hit enter.
    | Note: you can create multiple snapshot configuration files and run it through the script.

  2. If json file is not provided, script expects you to pass command line arguments.
     To see what are the options required. Run only the script like below.
  
    ::

     ./bin/exportjivasnapshot

     output:
     usage: exportjivasnapshot [-h] -n SNAPSHOT_NAME [-d SNAPSHOT_DESCRIPTION]
                          -s DB_NAME -t DB_HOST [-o DB_PORT] -u USER -p PASSWORD
                          [-i DB_DIALECT] [-r DB_DRIVER] -j JIVA_VERSION [-a]
                          [-e] [-c ENTITIES_COUNT]
     exportjivasnapshot: error: argument -n/--snapshot-name is required
